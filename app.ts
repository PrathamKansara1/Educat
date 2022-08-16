import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connection } from "./db/db";

dotenv.config();
connection();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Pratham");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
