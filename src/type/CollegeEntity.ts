import { Types } from "mongoose";
import { BaseEntity } from "./BaseEntity";

export interface CollegeEntity extends BaseEntity{
    adminId: Types.ObjectId;
    universityId : Types.ObjectId,
    collegeName: string;
    capacityStudent : number,
    currentStudents : number,
    courses: [],
    city : string,
    email: string,
    website : string,
}

export type AddCollegePayload = Omit<CollegeEntity, 'adminId' | 'universityId'>;

export type UpdateCollegePayload = Partial<AddCollegePayload>;