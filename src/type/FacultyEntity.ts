import { Types } from "mongoose";
import { BaseEntity } from "./BaseEntity";

export interface FacultyEntity extends BaseEntity {
  userId: Types.ObjectId;
  universityId: Types.ObjectId;
  collegeId: Types.ObjectId;
  qualification: [];
  permanentAddress: string;
  workingBranch: [];
  workingCourse: [];
  subjects: [];
  experience: string;
  dateOfBirth: Date;
}
