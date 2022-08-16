import { Schema, model, Types } from "mongoose";

interface CollegeInterface {
  adminId: Types.ObjectId;
  universityId : Types.ObjectId,
  collegeName: string;
  capacityStudent : number,
  currentStudents : number,
  courses: [],
  city : string,
  email: string,
  website : string,
  state: number;
  stateCode: number;
}

const CollegeSchema = new Schema<CollegeInterface>({
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

module.exports = model("Colleges", CollegeSchema);