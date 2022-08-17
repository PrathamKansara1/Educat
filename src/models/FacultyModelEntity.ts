import { Schema, model } from "mongoose";
import { FacultyEntity } from "../type";
import { ModelName } from "./ModelName";

const FacultyModelEntity = new Schema<FacultyEntity>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  universityId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Universities",
  },
  collegeId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Colleges",
  },
  qualification: {
    type: [],
    required: true,
  },
  permanentAddress: {
    type: String,
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
  dateOfBirth : {
    type: Date,
    required : true
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

module.exports = model<FacultyEntity>(ModelName.Faculty, FacultyModelEntity);