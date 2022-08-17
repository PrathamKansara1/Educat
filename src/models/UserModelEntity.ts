import { Schema, model } from "mongoose";
import { UserEntity } from "../type";
import { ModelName } from "./ModelName";

const UserModelEntity = new Schema<UserEntity>({
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

module.exports = model<UserEntity>(ModelName.User,UserModelEntity);