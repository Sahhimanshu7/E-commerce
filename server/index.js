import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";

import "./config/mongo.js";

import userRoutes from './routes/userRoutes.js';
import bodyParser from "express";
import productRoutes from "./routes/productRoutes.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

// Implementing routes
app.use('/api/auth/user', userRoutes);

app.use('/api/products/', productRoutes);

app.listen(PORT, () =>{
    console.log(`Server is listening on ${PORT}`);
});