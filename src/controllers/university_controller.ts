import { Response, Request } from "express";
import { created, creatingFail, deleted, deletingFail, FailureResponse, fetched, fetchingFail, responseStatuscode, SuccessResponse, updated, updatingFail } from "../helper";
import { UniversityModelEntity } from "../models";
import { AddUniversityPayload, UniversityEntity, updateUniversityPayload } from "../type";
import { addData, deleteData, readAllData, readData, readDataById, updateData } from "./base_controller";

// Add University
export const addUniversity = async (req: Request, res: Response) => {
  try {

    const addUniversity = await addData<AddUniversityPayload>(
      req.body,
      UniversityModelEntity
    );
    if (
      addUniversity.success &&
      addUniversity.statusCode === responseStatuscode.dataSuccess
    ) {
      return SuccessResponse(created("University"), addUniversity.data, res);
    }

    if (addUniversity.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        addUniversity.statusCode,
        creatingFail("University"),
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

// Get University
export const getUniversity = async (req: Request, res: Response) => {
  try {
    const universityData = await readData<UniversityEntity>(req.params.id, UniversityModelEntity);

    if (
      universityData.success &&
      universityData.statusCode === responseStatuscode.success
    ) {
      return SuccessResponse(fetched("University"), universityData.data, res);
    }

    if (universityData.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        universityData.statusCode,
        fetchingFail("University"),
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

// Get Specific University
export const getUniversities = async (req: Request, res: Response) => {
  try {

    const universityData = await readDataById<UniversityEntity>(req.body.payload, UniversityModelEntity);

    if (
      universityData.success &&
      universityData.statusCode === responseStatuscode.success
    ) {
      return SuccessResponse(fetched("Universities"), universityData.data, res);
    }

    if (universityData.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        universityData.statusCode,
        fetchingFail("Universities"),
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

// Get All Universities
export const getAllUniversity = async (req: Request, res: Response) => {
  try {
    const allUniversityData = await readAllData<UniversityEntity>(UniversityModelEntity);

    if (
      allUniversityData.success &&
      allUniversityData.statusCode === responseStatuscode.success
    ) {
      return SuccessResponse(fetched("Universities"), allUniversityData.data, res);
    }

    if (allUniversityData.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        allUniversityData.statusCode,
        fetchingFail("Universities"),
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

// Update University
export const updateUniversity = async (req: Request, res: Response) => {
  try {

    const updateUniversity = await updateData<updateUniversityPayload>(
      req.body,
      UniversityModelEntity,
      req.params.id
    );

    if (
      updateUniversity.success &&
      updateUniversity.statusCode === responseStatuscode.dataSuccess
    ) {
      return SuccessResponse(updated("University"), updateUniversity.data, res);
    }

    if (updateUniversity.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        updateUniversity.statusCode,
        updatingFail("University"),
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

// Delete University
export const deleteUniversity = async (req: Request, res: Response) => {
  try {
    const deleteUniversity = await deleteData<UniversityEntity>(req.params.id, UniversityModelEntity);

    if (
      deleteUniversity.success &&
      deleteUniversity.statusCode === responseStatuscode.dataSuccess
    ) {
      return SuccessResponse(deleted("University"), deleteUniversity.data, res);
    }

    if (deleteUniversity.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        deleteUniversity.statusCode,
        deletingFail("University"),
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