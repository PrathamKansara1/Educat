import { Types } from "mongoose";
import { BaseEntity } from "./BaseEntity";

export interface UniversityEntity extends BaseEntity {
  adminId: Types.ObjectId;
  universityName: string;
  state_: string;
  email: string;
  website: string;
  colleges: [];
}
