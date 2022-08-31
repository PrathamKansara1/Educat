import { Response } from "express";
import { responseStatuscode } from "../helper";
import { addToken } from "../helper/add_token";
import { UserModelEntity } from "../models";

export const addUser = async (res: Response, payload: any, model: any) => {
    const findUser = await UserModelEntity.findOne(payload.email ? { email: payload.email } : { name: payload.name });


    if (findUser) {
        return {
            data: null,
            success: false,
            statusCode: responseStatuscode.badRequest,
        };
    }
    const { role, name, email, password, avatar, phone, address, dateOfBirth, ...restData } = payload;
    const userData = {
        role,
        name,
        email,
        password,
        avatar,
        phone,
        address,
        dateOfBirth: dateOfBirth
    }

    const addUser = new UserModelEntity(userData);
    const saveUser = await addUser.save();

    restData.userId = saveUser._id;

    const addData = new model(restData);
    const saveData = await addData.save();

    if (!saveUser || !saveData) {
        return {
            data: null,
            success: false,
            statusCode: responseStatuscode.internalServerError,
        };
    }
    
    const token = addToken(saveData);
    
    const data = { addData, addUser }
    
    return {
        data: data,
        token,
        success: true,
        statusCode: responseStatuscode.dataSuccess,
    };
}