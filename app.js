import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/index.js";
//import errorHandler from "./events/error.js";

dotenv.config();

const app = express();

app.use(json());
app.use(cors());
app.use(router);
//app.use(errorHandler); adicionar um erro handler

export default app;

