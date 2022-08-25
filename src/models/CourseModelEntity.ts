import { Schema, model } from "mongoose";
import { CourseEntity } from "../type";
import { modelName } from "./modelName";

const CourseModelEntity = new Schema<CourseEntity>({
  // adminId: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "SuperAdmins",
  // },
  // universityId: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "Universities",
  // },
  name: {
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

export default model<CourseEntity>(modelName.Course, CourseModelEntity);