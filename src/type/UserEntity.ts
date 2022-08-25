export interface UserEntity {
  role: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  phone: string;
  address: string;
  dateOfBirth: string;
}

export type AddUserPayload = Omit<UserEntity, 'adminId'>;

export type updateUserPayload = Partial<AddUserPayload>;