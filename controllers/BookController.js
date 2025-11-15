import * as BookModel from "../models/BookModel.js";

export const fetchBooks = async (req, res) => {
    try {
        const books = await BookModel.getBooks();
        res.status(200).json({success: true, message: books})
    } catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const createBook = async (req, res) => {
    const { title, genre, status } = req.body;

    try {
        const bookId = await BookModel.insertBook(title, genre, status);
        res.status(200).json({success: true, message: `Book created with ID: ${bookId}`});
    } catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export const editBook = async (req, res) => {
    const { bookId } = req.params;
    const { title, genre, status } = req.body

    try {
        const updatedId= await BookModel.updateBook(title, genre, status, bookId);
        res.status(200).json({success: true, message: `Book updated with ID: ${updatedId}`});
    } catch(e) {
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export const deleteBook = async (req, res) => {
    const { bookId } = req.params;

    try {
        const deletedId = await BookModel.deleteBook(bookId);
        res.status(200).json({success: true, message: `Book deleted with ID: ${deletedId}`});
    } catch(e) {
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}
