import { Types } from "mongoose";
import { BaseEntity } from "./BaseEntity";

export interface FacultyEntity extends BaseEntity {
  userId: Types.ObjectId;
  universityId: Types.ObjectId;
  collegeId: Types.ObjectId;
  email: string,
  qualification: [];
  permanentAddress: string;
  workingBranch: [];
  workingCourse: [];
  subjects: [];
  experience: string;
  dateOfBirth: Date;
}

export type addFacultyPayload = Omit<FacultyEntity, 'userId' | 'universityId' | 'collegeId'>;

export type UpdateFacultyPayload = Partial<addFacultyPayload>;