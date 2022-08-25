import { Types } from "mongoose";
import { BaseEntity } from "./BaseEntity";

export interface FacultyEntity extends BaseEntity {
  userId: Types.ObjectId;
  // universityId: Types.ObjectId;
  // collegeId: Types.ObjectId;
  qualification: [];
  workingBranch: [];
  workingCourse: [];
  subjects: [];
  experience: string;
}

export type AddFacultyPayload = Omit<FacultyEntity, 'userId' | 'universityId' | 'collegeId'>;

export type UpdateFacultyPayload = Partial<AddFacultyPayload>;