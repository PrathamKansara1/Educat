import { Schema, model } from "mongoose";
import { FacultyEntity } from "../type";
import { modelName } from "./modelName";
import jwt from 'jsonwebtoken'
import { config } from "../config";

const FacultyModelEntity = new Schema<FacultyEntity>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "users",
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
  qualification: {
    type: [],
    required: true,
  },
  workingBranch: {
    type: [],
    required: true,
  },
  workingCourse: {
    type: [],
    required: true,
  },
  subjects: {
    type: [],
    required: true,
  },
  experience: {
    type: String,
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

FacultyModelEntity.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, config.jwtSecretKey as string, { expiresIn: config.jwtExpiresIn });
}

export default model<FacultyEntity>(modelName.Faculty, FacultyModelEntity);
