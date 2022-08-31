import { Schema, model } from "mongoose";
import { StudentEntity } from "../type";
import { modelName } from "./modelName";
import jwt from 'jsonwebtoken'
import { config } from "../config";

const StudentModelEntity = new Schema<StudentEntity>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  // universityId: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "Universities",
  // },
  // collegeId: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "Colleges",
  // },
  // courseId: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "Courses",
  // },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  enrollmentNumber: {
    type: Number,
    required: true,
  },
  currentStream: {
    type: String,
    required: true,
  },
  currentSemester: {
    type: Number,
    required: true,
  },
  previousDetail: {
    type: [],
    required: true,
  },
  state: {
    type: Number,
    required: true,
  },
  stateCode: {
    type: Number,
    required: true,
  },
});

StudentModelEntity.methods.getJwtToken = function () {
  console.log("Welcome")
  return jwt.sign({ id: this._id }, config.jwtSecretKey as string, { expiresIn: config.jwtExpiresIn });
}

export default model<StudentEntity>(modelName.Student, StudentModelEntity);
