import { Schema, model } from "mongoose";
import { SuperAdminEntity } from "../type";
import { modelName } from "./modelName";
import jwt from 'jsonwebtoken'
import { config } from "../config";

const SuperAdminModelEntity = new Schema<SuperAdminEntity>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    // universityId: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'Universities'
    // },
    designation: {
        type: String,
        required: true
    },
    state: {
        type: Number,
        required: true
    },
    stateCode: {
        type: Number,
        required: true
    }
})

SuperAdminModelEntity.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, config.jwtSecretKey as string, { expiresIn: config.jwtExpiresIn });
}

export default model<SuperAdminEntity>(modelName.Superadmin, SuperAdminModelEntity);

