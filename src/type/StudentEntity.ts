import { Types } from "mongoose";
import { BaseEntity } from "./BaseEntity";

export interface StudentEntity extends BaseEntity{
  userId: Types.ObjectId;
  // universityId: Types.ObjectId;
  // collegeId: Types.ObjectId;
  // courseId: Types.ObjectId;
  fatherName: string;
  motherName: string;
  enrollmentNumber: number;
  currentStream: string;
  currentSemester: number;
  previousDetail: [];
}

export type AddStudentPayload = Omit<StudentEntity, 'userId' | 'universityId' | 'collegeId' | 'courseId'>;

export type UpdateStudentPayload = Partial<AddStudentPayload>;