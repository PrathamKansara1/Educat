import { Schema, model, Types } from "mongoose";

interface FacultyInterface {
  userId: Types.ObjectId;
  universityId: Types.ObjectId;
  collegeId: Types.ObjectId;
  qualification: [];
  permanentAddress: string;
  workingBranch: [];
  workingCourse: [];
  subjects: [];
  experience: string;
  dateOfBirth: string;
  state: number;
  stateCode: number;
}

const FacultySchema = new Schema<FacultyInterface>({
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
  state: {
    type: Number,
    required: true,
  },
  stateCode: {
    type: Number,
    required: true,
  },
});

module.exports = model("Faculties", FacultySchema);