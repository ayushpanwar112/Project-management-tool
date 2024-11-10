import mongoose,{Schema,Document,Model} from "mongoose";
 
export  interface ITask extends Document {
    name:String,
    description:String,
    completed:Boolean,
    date:Date,
}
const TaskSchema:Schema = new Schema({
    name:{type:String,required:true},
     description:{type:String,required:true},
     completed:{type:Boolean,default:false},
     date:{type:Date,required:true},
     timeout:{type:Boolean,default:false},
    privority:{type:String,default:"low"}
})
 export  const TaskModel: Model<ITask> = mongoose.models.Task||mongoose.model<ITask>("Task",TaskSchema);