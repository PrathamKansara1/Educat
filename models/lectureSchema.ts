import { Schema, model, Types } from "mongoose";

interface LectureInterface {
  collegeId: Types.ObjectId;
  courseId: Types.ObjectId;
  facultyId: Types.ObjectId;
  subjectName: string;
  joinStudents: [];
  enrollStudents: [];
  lectureStartTime: Date;
  lectureEndTime: Date;
  reschedule: boolean;
  state: number;
  stateCode: number;
}

const LectureSchema = new Schema<LectureInterface>({
  collegeId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Colleges",
  },
  courseId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Courses",
  },
  facultyId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Faculties",
  },
  subjectName: {
    type: String,
    required: true,
  },
  joinStudents: {
    type: [{ type: Schema.Types.ObjectId, ref:"Students" }],
    required: true,
  },
  enrollStudents: {
    type: [{ type: Schema.Types.ObjectId, ref: "Students" }],
    required: true,
  },
  lectureStartTime: {
    type: Date,
    required: true,
  },
  lectureEndTime: {
    type: Date,
    required: true,
  },
  reschedule: {
    type: Boolean,
    required: true,
  },
  state: {
    type: Number,
    required: true,
  },
  stateCode: {
    type: Number,
    required: true,
  },
});

module.exports = model("Courses", LectureSchema);
