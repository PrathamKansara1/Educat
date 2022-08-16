import { Schema, model, Types } from "mongoose";

interface UniversityInterface {
  adminId: Types.ObjectId;
  universityName: string;
  state_: string;
  email: string;
  website: string;
  colleges: [];
  state: number;
  stateCode: number;
}

const UniversitySchema = new Schema<UniversityInterface>({
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

module.exports = model("Universities", UniversitySchema);