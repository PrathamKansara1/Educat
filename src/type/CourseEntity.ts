import { Types } from "mongoose";
import { BaseEntity } from "./BaseEntity";

export interface CourseEntity extends BaseEntity {
  adminId: Types.ObjectId;
  universityId: Types.ObjectId;
  courseName: string;
  stream: [];
}
