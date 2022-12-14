import { Response } from "express";
import { responseStatuscode } from "./res_status_code";

export interface BaseResHandler<T> {
  data: T | object | null;
  success: boolean;
  statusCode: number;
}

export const SuccessResponse = (
  message: string,
  data: object | null,
  res: Response
) => {
  res.status(responseStatuscode.success).json({
    success: true,
    message,
    data,
  });
};

export const FailureResponse = (
  statusCode: number,
  message: string,
  res: Response
) => {
  res.status(statusCode).json({
    success: false,
    message,
  });
};

export const SuccessWithCookie = (message: string,
  data: object | null,
  token: string,
  res: Response
  )=>{
    const options = {
      expireIn: '1h',
      httpOnly: true
    };
    return res.status(responseStatuscode.success).cookie("token",token,options).json({
        success : true,
        message,
        user:data,
        token
    })
  }