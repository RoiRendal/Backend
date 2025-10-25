import express from "express";
import { PORT } from "./config/env.js";

/* CREATE EXPRESS APP */
const app = express();

/* MIDDLEWARE */
app.use(express.json());

app.get("/roi", async(request, response) => {
    response.status(200).json({"Message" : "oh my god bruh."});
});

app.listen(PORT, () => {
    try {
        console.log(`Server is running on port ${PORT}`);
    }catch(e) {
        console.log(e);
    }
});