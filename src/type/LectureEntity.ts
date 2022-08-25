import { Types } from "mongoose";
import { BaseEntity } from "./BaseEntity";

export interface LectureEntity extends BaseEntity {
  // collegeId: Types.ObjectId;
  // courseId: Types.ObjectId;
  // facultyId: Types.ObjectId;
  name: string;
  subjectName: string;
  joinStudents: [];
  enrollStudents: [];
  lectureStartTime: string;
  lectureEndTime: string;
  reschedule: boolean;
}

export type addLecturePayload = Omit<LectureEntity, 'facultyId' | 'courseId' | 'collegeId'>;

export type UpdateLecturePayload = Partial<addLecturePayload>;