import * as BookController from "../controllers/BookController.js";
import authHandler from "../middleware/authHandler.js";
import express from "express";

const bookRoutes = express.Router();

bookRoutes.use(authHandler);
bookRoutes.get('/all', BookController.fetchBooks);
bookRoutes.post('/new', BookController.createBook);
bookRoutes.put('/edit/:bookId', BookController.editBook);
bookRoutes.delete('/delete/:bookId', BookController.deleteBook);

export default bookRoutes;
