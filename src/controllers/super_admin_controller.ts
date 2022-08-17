// import { Request, Response } from "express";
// import adminModel = require("../models/adminSchema");

// exports.registerAdmin = async (req: Request, res: Response) => {
//   try {
//     console.log(req.body);
//     const { userId, universityId, designation, state, stateCode } = req.body;
//     const newAdmin = await adminModel.create({
//       userId,
//       universityId,
//       designation,
//       state,
//       stateCode,
//     });
//     const saveNewAdmin = await newAdmin.save();
//     res.status(200).json({message:saveNewAdmin , success: true})
//   } catch (error) {
//     console.log(error);
//   }
// };