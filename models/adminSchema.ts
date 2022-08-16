import { Schema, model, Types } from "mongoose";

interface AdminInterface {
  userId : Types.ObjectId,
  universityId : Types.ObjectId,
  designation : string,
  state : number,
  stateCode : number
}

const AdminSchema = new Schema<AdminInterface>({
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

module.exports = model("SuperAdmins",AdminSchema);