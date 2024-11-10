"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTask = void 0;
const TaskModle_1 = require("../modles/TaskModle");
const CreateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = new TaskModle_1.TaskModle(req.body);
        yield task.save();
        res.status(201).json({ success: true, message: "Task Add" });
    }
    catch (e) {
        console.log("error", e);
        res.status(500).json({ success: true, message: "Sorry failed" });
    }
});
exports.CreateTask = CreateTask;
