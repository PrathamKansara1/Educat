export interface BaseEntity {
  state: number;
  stateCode: number;
}

export interface BasicPayloadEntity {
  email?: string;
  name? : string
}

export interface SpecificPayloadEntity{
  id: string
}