import express from "express";
import cors from 'cors';
import 'dotenv/config.js';
import bookRoutes    from "./routers/BookRoutes.js";
import studentRoutes from "./routers/StudentRoutes.js";

/* CREATE EXPRESS APP */
const app = express();

/* MIDDLEWARE */
let corsOptions = {
    origin: process.env.ORIGIN
}

app.use(express.json());
app.use(cors(corsOptions));
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/book'   ,    bookRoutes);
app.use('/student', studentRoutes);

app.listen(process.env.PORT, () => {
    try {
        console.log(`Server is running on port ${process.env.PORT}`);
    }catch(e) {
        console.log(e);
    }
});
