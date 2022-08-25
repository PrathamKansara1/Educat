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
import {CollegeRoutes} from './src/routes'
import {CourseRoutes} from './src/routes'
import {FacultyRoutes} from './src/routes'
import {LectureRoutes} from './src/routes'
import {StudentRoutes} from './src/routes'
import {UniversityRoutes} from './src/routes'
import {AdminRoutes} from './src/routes'
app.use("/api/v1",CollegeRoutes);
app.use("/api/v1",CourseRoutes);
app.use("/api/v1",FacultyRoutes);
app.use("/api/v1",LectureRoutes);
app.use("/api/v1",StudentRoutes);
app.use("/api/v1",UniversityRoutes);
app.use("/api/v1",AdminRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Pratham");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});