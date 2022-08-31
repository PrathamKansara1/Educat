import { Response } from "express";

export const addToken = (user:any) => {
    return user.getJwtToken();
    // console.log(token);
    

    // const Options = {
    //     httpOnly : true
    // }

    // return res.status(statusCode).cookie("token",token,Options).json({
    //     success : true,
    //     user,
    //     token
    // })
}