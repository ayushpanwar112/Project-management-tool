import express, { Router } from 'express';
import { AllTask, CreateTask, GetTask, RemoveTask, StreamingData, UpdateTask} from '../controller/TaskController';

 const router:Router = express.Router();


 router.post("/tasks",CreateTask);
 router.delete("/tasks/:id",RemoveTask);
 router.put("/tasks/:id",UpdateTask);
 router.get("/tasks",AllTask);
 router.get("/tasks/:name",GetTask);
 router.get("/streaming",StreamingData);


 export default router;


