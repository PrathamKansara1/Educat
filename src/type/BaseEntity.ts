import { Types } from "mongoose";

export interface BaseEntity {
  state: number;
  stateCode: number;
}

export interface BasicPayloadEntity {
  userId?: Types.ObjectId,
  role? : number,
  name? : string,
  email? : string,
  password? : string,
  avatar? : string,
  phone? : string,
  address? : string,
  dateOfBirth? : string
}

export interface SpecificPayloadEntity{
  id: string
}