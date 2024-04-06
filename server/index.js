import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "express";

import "./config/mongo.js";
import { rateLimiterUsingThirdParty } from "./middleware/rateLimit.js";
import fourOhFour from "./middleware/fourOhFour.js";

import userRoutes from './routes/userRoutes.js';
import productRoutes from "./routes/productRoutes.js";
import productLoaderRoutes from "./routes/productsLoaderRoute.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(rateLimiterUsingThirdParty);

const PORT = process.env.PORT || 8080;

// Implementing routes
app.use('/api/auth/user', userRoutes);

app.use('/api/products/', productRoutes);

app.use('/api/products/', productLoaderRoutes);

app.listen(PORT, () =>{
    console.log(`Server is listening on ${PORT}`);
});

app.use(fourOhFour);