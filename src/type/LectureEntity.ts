import { Types } from "mongoose";
import { BaseEntity } from "./BaseEntity";

export interface LectureEntity extends BaseEntity {
  collegeId: Types.ObjectId;
  courseId: Types.ObjectId;
  facultyId: Types.ObjectId;
  subjectName: string;
  joinStudents: [];
  enrollStudents: [];
  lectureStartTime: Date;
  lectureEndTime: Date;
  reschedule: boolean;
}

export type addLecturePayload = Omit<LectureEntity, 'facultyId' | 'courseId' | 'collegeId'>;

export type UpdateLecturePayload = Partial<addLecturePayload>;