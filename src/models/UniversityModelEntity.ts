import { Schema, model } from "mongoose";
import { UniversityEntity } from "../type";
import { modelName } from "./modelName";

const UniversityModelEntity = new Schema<UniversityEntity>({
  adminId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "SuperAdmins",
  },
  universityName: {
    type: String,
    required: true,
  },
  state_: {
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
  colleges: {
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
  }
});

export default model<UniversityEntity>(modelName.University, UniversityModelEntity);