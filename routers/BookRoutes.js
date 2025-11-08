import * as BookController from '../controllers/BookController.js';
import express from "express";

const bookRoutes = express.Router();
// bookRoutes.get('all',);
// bookRoutes.post('new');
// bookRoutes.();
// bookRoutes.();

bookRoutes.get('/all', BookController.fetchBooks);

export default bookRoutes;
