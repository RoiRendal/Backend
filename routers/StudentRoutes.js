import * as StudentController from '../controllers/StudentController.js';
import express from "express";

const studentRoutes = express.Router();
// bookRoutes.get('all',);
// bookRoutes.post('new');
// bookRoutes.();
// bookRoutes.();

studentRoutes.get('/all', StudentController.fetchStudents);

export default studentRoutes;