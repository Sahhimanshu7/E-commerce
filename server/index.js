import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";

import "./config/mongo.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>{
    console.log(`Server is listening on ${PORT}`);
});