import { Schema, model, } from "mongoose";
import { LectureEntity } from "../type";
import { modelName } from "./modelName";

const LectureModelEntity = new Schema<LectureEntity>({
  // collegeId: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "colleges",
  // },
  // courseId: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "courses",
  // },
  // facultyId: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "faculties",
  // },
  name:{
    type: String,
    required:true
  },
  subjectName: {
    type: String,
    required: true,
  },
  // joinStudents: {
  //   type: [{ type: Schema.Types.ObjectId, ref:"students" }],
  //   required: true,
  // },
  // enrollStudents: {
  //   type: [{ type: Schema.Types.ObjectId, ref: "students" }],
  //   required: true,
  // },
  lectureStartTime: {
    type: String,
    required: true,
  },
  lectureEndTime: {
    type: String,
    required: true,
  },
  reschedule: {
    type: Boolean,
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

export default model<LectureEntity>(modelName.Lecture, LectureModelEntity);