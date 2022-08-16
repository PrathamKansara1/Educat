import { Schema, model, Types } from "mongoose";

interface StudentInterface {
  userId: Types.ObjectId;
  universityId: Types.ObjectId;
  collegeId: Types.ObjectId;
  courseId: Types.ObjectId;
  fatherName: string;
  motherName: string;
  permanentAddress: string;
  avatar?: string, 
  enrollmentNumber: number;
  currentStream: string;
  currentSemester: number;
  previousDetail: [];
  state: number;
  stateCode: number;
}

const StudentSchema = new Schema<StudentInterface>({
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
  courseId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Courses",
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  avatar : {
    type: String
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

module.exports = model("Students", StudentSchema);
