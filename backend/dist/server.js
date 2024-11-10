"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const Db_1 = require("./config/Db");
const Crud_1 = __importDefault(require("./routes/Crud"));
const app = (0, express_1.default)();
(0, dotenv_1.configDotenv)();
(0, Db_1.connectDb)();
const port = parseInt(process.env.PORT || "3000", 10);
app.use("/", (req, res) => {
    console.log("running");
    res.send("Hello, world1!");
});
app.use("/api", Crud_1.default);
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
