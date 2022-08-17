import { Types } from "mongoose";
import { BaseEntity } from "./BaseEntity";

export interface SuperAdminEntity extends BaseEntity {
  userId: Types.ObjectId;
  universityId: Types.ObjectId;
  designation: string;
}
