import { Schema, model } from "mongoose";
import { CourseEntity } from "../type";
import { ModelName } from "./ModelName";

const CourseModelEntity = new Schema<CourseEntity>({
  adminId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "SuperAdmins",
  },
  universityId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Universities",
  },
  courseName: {
    type: String,
    required: true,
  },
  stream: {
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

module.exports = model<CourseEntity>(ModelName.Course, CourseModelEntity);