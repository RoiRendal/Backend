import * as StudentController from "../controllers/StudentController.js";
import authHandler from "../middleware/authHandler.js";
import express from "express";

const studentRoutes = express.Router();

studentRoutes.use(authHandler);
studentRoutes.get('/all', StudentController.fetchStudent);
studentRoutes.post('/new', StudentController.createStudent);
studentRoutes.put('/edit/:studentId', StudentController.editStudent);
studentRoutes.delete('/delete/:studentId', StudentController.deleteStudent);

export default studentRoutes;
