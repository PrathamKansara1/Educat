import { NextFunction, Request, Response } from "express";
import { config } from "../../config";
import * as jwt from 'jsonwebtoken'
import { UserModelEntity } from "../../models";

export const authenticateUser = async(req:Request,res:Response,next:NextFunction) => {
  const { token } = req.cookies;

  if(!token){
    return next(res.status(400).json({message:`Login Required to Access this`}));
  }

  const data = jwt.verify(token, config.jwtSecretKey as string);

  // req.user = await UserModelEntity.findById(data.id);

  next()
}

// export const authenticateRole = (role: string) => {
//     return (req:Request, res:Response, next:NextFunction) => {
//       if(role !== req.user.role){
//         return next(res.status(400).json({message:`${req.body.role} is not allowed.`}))
//       }
//       next();
//     };
//   };