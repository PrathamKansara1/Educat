import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectMongoDb } from "./src/db";

dotenv.config();
connectMongoDb();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// import admin = require('./routes/adminRoute');

// app.use("/api/v1",admin);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Pratham");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});