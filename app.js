import express from "express";
import 'dotenv/config.js';
import bookRoutes    from "./routers/BookRoutes.js";
import studentRoutes from "./routers/StudentRoutes.js";

/* CREATE EXPRESS APP */
const app = express();

/* MIDDLEWARE */
app.use(express.json());

app.listen(process.env.PORT, () => {
    try {
        console.log(`Server is running on port ${process.env.PORT}`);
    }catch(e) {
        console.log(e);
    }
});

app.use('/book'   ,    bookRoutes);
app.use('/student', studentRoutes);
