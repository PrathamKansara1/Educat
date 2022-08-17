import { Schema, model } from "mongoose";
import { CollegeEntity } from "../type";
import { ModelName } from "./ModelName";

const CollegeModelEntity = new Schema<CollegeEntity>({
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
  collegeName: {
    type: String,
    required: true,
  },
  capacityStudent : {
    type : Number,
    required : true
  },
  currentStudents : {
    type : Number,
    required : true
  },
  courses : {
    type : [],
    required: true
  },
  city: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  website: {
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
  }
});

module.exports = model<CollegeEntity>(ModelName.College, CollegeModelEntity);