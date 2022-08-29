import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectMongoDb } from "./src/db";
import { dataValidate } from "./src/middleware/validate_data";

dotenv.config();
connectMongoDb();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const validateData = dataValidate({
//   name: 'fdfdsf', 
//   email: 'pratham@gmail.com',
//   password: 'fnuhre928183d',
//   confirmPassword: 'fnuhre928183d',
//   avatar: 'sdkjfnjdfjd fnd',
//   phone: '1354533463',
//   address: '129,pushp cottage,meghpar , anjar,kutch,370110',
//   dateOfBirth: '03/03/2002',
//   capacityStudent: 5454,
//   currentStudents : 225,
//   courses: ['B.E','M.E'],
//   city: 'Adipur',
//   website: 'http://www.google.com',
//   state: 1,
//   stateCode: 2,
//   stream: ['CE','Civil'],
//   qualification: ['HSC','SSC'],
//   workingBranch: ['CE'],
//   workingCourse: ['B.E'],
//   subjects: ['COA','MPI'],
//   experience: 4,
//   subjectName: 'Computer Organization',
//   // lectureStartTime: 2001-12-12,
//   // lectureEndTime: 2002-12-21,
//   reschedule: false,
//   fatherName: 'Navin Bhai',
//   motherName: 'Matu Ben',
//   enrollmentNumber: 1234567891234567,
//   currentStream: 'CE',
//   currentSemester: 7,
//   previousDetail: {
//     'name' : 'Pratham'
//   },
//   designation: 'Principal',
//   universityState : 'Gujarat',
//   colleges: ['GEC modasa']
// });

// console.log(validateData);


// Routes
import { CollegeRoutes } from './src/routes'
import { CourseRoutes } from './src/routes'
import { FacultyRoutes } from './src/routes'
import { LectureRoutes } from './src/routes'
import { StudentRoutes } from './src/routes'
import { UniversityRoutes } from './src/routes'
import { AdminRoutes } from './src/routes'
app.use("/api/v1", CollegeRoutes);
app.use("/api/v1", CourseRoutes);
app.use("/api/v1", FacultyRoutes);
app.use("/api/v1", LectureRoutes);
app.use("/api/v1", StudentRoutes);
app.use("/api/v1", UniversityRoutes);
app.use("/api/v1", AdminRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Pratham");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});