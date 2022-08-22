import { Schema, model, } from "mongoose";
import { LectureEntity } from "../type";
import { modelName } from "./modelName";

const LectureModelEntity = new Schema<LectureEntity>({
  collegeId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Colleges",
  },
  courseId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Courses",
  },
  facultyId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Faculties",
  },
  subjectName: {
    type: String,
    required: true,
  },
  joinStudents: {
    type: [{ type: Schema.Types.ObjectId, ref:"Students" }],
    required: true,
  },
  enrollStudents: {
    type: [{ type: Schema.Types.ObjectId, ref: "Students" }],
    required: true,
  },
  lectureStartTime: {
    type: Date,
    required: true,
  },
  lectureEndTime: {
    type: Date,
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