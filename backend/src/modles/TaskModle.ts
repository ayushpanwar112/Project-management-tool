import { progress } from "framer-motion";
import mongoose,{Schema,Document,Model} from "mongoose";
 
export  interface ITask extends Document {
    name:String;
    description:String;
    completed:Boolean;
    date:Date;
    timeout:Boolean;
    priority:string;
    progress:string;
}
const TaskSchema:Schema = new Schema({
    name:{type:String,required:true},
     description:{type:String,required:true},
     completed:{type:Boolean,default:false},
     date:{type:String,required:false},
     timeout:{type:Boolean,default:false},
    priority:{type:String,default:"low"},
     progress:{type:String,default:"todo"},
})
 export  const TaskModel: Model<ITask> = mongoose.models.Task||mongoose.model<ITask>("Task",TaskSchema);