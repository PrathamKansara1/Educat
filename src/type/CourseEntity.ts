import { Types } from "mongoose";
import { BaseEntity } from "./BaseEntity";

export interface CourseEntity extends BaseEntity {
  adminId: Types.ObjectId;
  universityId: Types.ObjectId;
  name: string;
  stream: [];
}

export type AddCoursePayload = Omit<CourseEntity, 'adminId' | 'universityId'>;

export type UpdateCoursePayload = Partial<AddCoursePayload>;