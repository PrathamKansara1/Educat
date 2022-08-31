import { Schema, model } from "mongoose";
import { UserEntity } from "../type";
import { modelName } from "./modelName";
import jwt from 'jsonwebtoken'
import { config } from "../config";

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
        type: String,
        required : true
    }

})

UserModelEntity.methods.getJwtToken = function() {
    return jwt.sign({id:this._id} , config.jwtSecretKey as string, {expiresIn: config.jwtExpiresIn});
}

export default model<UserEntity>(modelName.User,UserModelEntity);