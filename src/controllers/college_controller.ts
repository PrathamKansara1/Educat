import { Request, Response } from "express";
import { AddCollegePayload, CollegeEntity, UpdateCollegePayload } from "../type";
import {
  addData,
  deleteData,
  readAllData,
  readData,
  readDataById,
  updateData,
} from "./base_controller";
import { CollegeModelEntity } from "../models";
import {
  created,
  creatingFail,
  deleted,
  deletingFail,
  FailureResponse,
  fetched,
  fetchingFail,
  responseStatuscode,
  SuccessResponse,
  updated,
  updatingFail,
} from "../helper";

// Add College
export const addCollege = async (req: Request, res: Response) => {
  try {
    const User = false;
    const addCollege = await addData<AddCollegePayload>(
      req.body,
      CollegeModelEntity,
      User
    );

    if (
      addCollege.success &&
      addCollege.statusCode === responseStatuscode.dataSuccess
    ) {
      return SuccessResponse(created("College"), addCollege.data, res);
    }

    if (addCollege.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        addCollege.statusCode,
        creatingFail("College"),
        res
      );
    }
  } catch (error) {
    return FailureResponse(
      responseStatuscode.badRequest,
      (error as Error).message,
      res
    );
  }
};

// Get College
export const getCollege = async (req: Request, res: Response) => {
  try {
    const collegeData = await readData<CollegeEntity>(req.params.id, CollegeModelEntity);

    if (
      collegeData.success &&
      collegeData.statusCode === responseStatuscode.success
    ) {
      return SuccessResponse(fetched("College"), collegeData.data, res);
    }

    if (collegeData.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        collegeData.statusCode,
        fetchingFail("College"),
        res
      );
    }
  } catch (error) {
    return FailureResponse(
      responseStatuscode.badRequest,
      (error as Error).message,
      res
    );
  }
};

// Get Specific Colleges
export const getColleges = async (req: Request, res: Response) => {
  try {
    const collegesData = await readDataById<CollegeEntity>(req.body.payload, CollegeModelEntity);

    if (
      collegesData.success &&
      collegesData.statusCode === responseStatuscode.success
    ) {
      return SuccessResponse(fetched("Colleges"), collegesData.data, res);
    }

    if (collegesData.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        collegesData.statusCode,
        fetchingFail("Colleges"),
        res
      );
    }
  } catch (error) {
    return FailureResponse(
      responseStatuscode.badRequest,
      (error as Error).message,
      res
    );
  }
};

// Get All Colleges
export const getAllColleges = async (req: Request, res: Response) => {
  try {
    const allCollegesData = await readAllData<CollegeEntity>(CollegeModelEntity);

    if (
      allCollegesData.success &&
      allCollegesData.statusCode === responseStatuscode.success
    ) {
      return SuccessResponse(fetched("Colleges"), allCollegesData.data, res);
    }

    if (allCollegesData.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        allCollegesData.statusCode,
        fetchingFail("Colleges"),
        res
      );
    }
  } catch (error) {
    return FailureResponse(
      responseStatuscode.badRequest,
      (error as Error).message,
      res
    );
  }
};

// Update College
export const updateCollege = async (req: Request, res: Response) => {
  try {
    const updateCollege = await updateData<UpdateCollegePayload>(
      req.body,
      CollegeModelEntity,
      req.params.id
    );

    if (
      updateCollege.success &&
      updateCollege.statusCode === responseStatuscode.dataSuccess
    ) {
      return SuccessResponse(updated("College"), updateCollege.data, res);
    }

    if (updateCollege.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        updateCollege.statusCode,
        updatingFail("College"),
        res
      );
    }
  } catch (error) {
    return FailureResponse(
      responseStatuscode.badRequest,
      (error as Error).message,
      res
    );
  }
};

// Delete College
export const deleteCollege = async (req: Request, res: Response) => {
  try {
    const deleteCollege = await deleteData<CollegeEntity>(req.params.id, CollegeModelEntity);

    if (
      deleteCollege.success &&
      deleteCollege.statusCode === responseStatuscode.dataSuccess
    ) {
      return SuccessResponse(deleted("College"), deleteCollege.data, res);
    }

    if (deleteCollege.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        deleteCollege.statusCode,
        deletingFail("College"),
        res
      );
    }
  } catch (error) {
    return FailureResponse(
      responseStatuscode.badRequest,
      (error as Error).message,
      res
    );
  }
};
