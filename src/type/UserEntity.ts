export interface UserEntity {
  role: number;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  phone: string;
  address: string;
  dateOfBirth: Date;
}
