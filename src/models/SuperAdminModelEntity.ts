import { Schema, model } from "mongoose";
import { SuperAdminEntity } from "../type";
import { ModelName } from "./ModelName";

const SuperAdminModelEntity = new Schema<SuperAdminEntity>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    universityId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Universities'
    },
    designation : {
        type: String,
        required : true
    },
    state : {
        type: Number,
        required : true
    },
    stateCode : {
        type: Number,
        required : true
    }
})

module.exports = model<SuperAdminEntity>(ModelName.SuperAdmin,SuperAdminModelEntity);
