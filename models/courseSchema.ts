import { Schema, model, Types } from "mongoose";

interface CourseInterface {
  adminId: Types.ObjectId;
  universityId: Types.ObjectId;
  courseName: string;
  stream: [];
  state: number;
  stateCode: number;
}

const CourseSchema = new Schema<CourseInterface>({
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

module.exports = model("Courses", CourseSchema);