import express from "express";
import cors from "cors";
import product from "../Router/product";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const { API } = process.env;

app.use(express.json());
app.use(cors());
app.use("/api",product)

mongoose.connect(API);

export const viteNodeApp = app;
