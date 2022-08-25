import { Types } from "mongoose";
import { BaseEntity } from "./BaseEntity";

export interface UniversityEntity extends BaseEntity {
  // adminId: Types.ObjectId;
  universityName: string;
  universityState: string;
  email: string;
  website: string;
  colleges: [];
}

export type AddUniversityPayload = Omit<UniversityEntity, 'adminId'>;

export type updateUniversityPayload = Partial<AddUniversityPayload>;