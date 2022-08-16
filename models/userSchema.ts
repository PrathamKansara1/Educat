import { Schema, model } from "mongoose";

interface UserInterface {
  role: number;
  name: string;
  email: string,
  password: string,
  avatar? : string,
  phone: string,
  address : string,
  dateOfBirth : Date
}

const UserSchema = new Schema<UserInterface>({
    role: {
        type: Number,
        required: true
    },
    name : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    },
    avatar : {
        type: String
    },
    phone : {
        type: String,
        required : true
    },
    address : {
        type: String,
        required : true
    },
    dateOfBirth : {
        type: Date,
        required : true
    }

})

module.exports = model("Users",UserSchema);