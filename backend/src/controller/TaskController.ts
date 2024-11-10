import  {Request,Response, RequestHandler} from "express"
import { TaskModel,ITask } from "../modles/TaskModle"
import { fetchTwitchStreams } from "../service/twitchService";



const StreamingData=async (req: Request, res: Response) => {
  try {
    // Fetch tasks from DB
    const tasks = await TaskModel.find();

    // Fetch live streams from Twitch API
    const streams = await fetchTwitchStreams();

    res.status(200).json({ success: true, tasks, streams });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch data' });
  }
};


const CreateTask=async(req:Request,res:Response)=>{
    try{
        const task :ITask= new TaskModel(req.body);
      await task.save();
        res.status(201).json({success:true,message:"Task Add"});
    }
    catch(e:unknown)
    {
        console.log("error",e)
        res.status(500).json({success:true,message:"Sorry failed"})
    }


}
const GetTask=async(req:Request,res:Response):Promise<void>=>{
        const task = await TaskModel.findById(req.params.id);
        if(task)
        {
          res.status(200).json({success:true,task});
              return;
        }
            res.status(404).json({success:false,message:"task not found"});
}


 const RemoveTask: RequestHandler<{ id: string }> = async (req: Request, res: Response):Promise<void>=> {
  try {

    const task = await TaskModel.findByIdAndDelete(req.params.id); 
    if (!task) {
   res.status(404).json({ success: false, message: 'Task not found' }); 
     return;
    }

     res.status(200).json({ success: true, message: 'Task deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
const UpdateTask=async(req:Request,res:Response):Promise<void>=>{
  try {
    const task = await TaskModel.findByIdAndUpdate(req.params.id,req.body,{ new: true });
    if(!task)
    {
      res.status(404).json({success:false,message:"Task not found"});
          return;
    }
     res.status(200).json({success:true,message:'Task update'})
  } catch (error:unknown) {
       res.status(500).json({success:false,message:"Internal server error"});
  }


}
const AllTask=async(req:Request,res:Response):Promise<void>=>
{
   try {
       const task = await TaskModel.find()
       if(task.length>0)
       {
        res.status(200).json({success:true,task})
         return;
      }
       res.status(404).json({success:false,message:"No Task"})
   } catch (error:unknown) {
        console.log(error);
        res.status(500).json({success:true,message:'Internal server error'});
   }
}



export {CreateTask,RemoveTask,UpdateTask,AllTask,GetTask,StreamingData};
