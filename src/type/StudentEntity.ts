import { Types } from "mongoose";
import { BaseEntity } from "./BaseEntity";

export interface StudentEntity extends BaseEntity{
  userId: Types.ObjectId;
  universityId: Types.ObjectId;
  collegeId: Types.ObjectId;
  courseId: Types.ObjectId;
  fatherName: string;
  motherName: string;
  permanentAddress: string;
  avatar?: string;
  enrollmentNumber: number;
  currentStream: string;
  currentSemester: number;
  previousDetail: [];
}