import { Schema, model } from "mongoose";
import { CollegeEntity } from "../type";
import { modelName } from "./modelName"; 

const CollegeModelEntity = new Schema<CollegeEntity>({
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

export default model<CollegeEntity>(modelName.College, CollegeModelEntity);