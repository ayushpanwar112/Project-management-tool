import { configDotenv } from "dotenv";
import express, { Request, Response } from "express"; 
import { connectDb } from "./config/Db";
import router from "./routes/Crud";
import cors from "cors";

const app = express();
app.use(cors());
configDotenv()
connectDb();
const port=parseInt(process.env.PORT || "3000", 10); 
app.use(express.json());
app.get("/", (req: Request, res: Response): void => { 
    console.log("running");
    res.send("Hello, world1!"); 
});
app.use("/api",router)

app.listen(port, (): void => {
    console.log(`Server is running on port http://localhost:${port}`);
});
