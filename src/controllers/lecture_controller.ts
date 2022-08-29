import { Request, Response } from "express";
import { created, creatingFail, deleted, deletingFail, FailureResponse, fetched, fetchingFail, responseStatuscode, SuccessResponse, updated, updatingFail } from "../helper";
import { LectureModelEntity } from "../models";
import { addLecturePayload, LectureEntity, UpdateLecturePayload } from "../type";
import { addData, deleteData, readAllData, readData, readDataById, updateData } from "./base_controller";
import { validateData } from "./validation_controller";

// Add Lecture
export const addLecture = async (req: Request, res: Response) => {
  try {
    const User = false;
    const validData = validateData(req.body, res);
    if (validData === true) {
      const addLecture = await addData<addLecturePayload>(
        req.body,
        LectureModelEntity,
        User
      );

      if (
        addLecture.success &&
        addLecture.statusCode === responseStatuscode.dataSuccess
      ) {
        return SuccessResponse(created("Lecture"), addLecture.data, res);
      }

      if (addLecture.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          addLecture.statusCode,
          creatingFail("Lecture"),
          res
        );
      }
    }
  } catch (error) {
    return FailureResponse(
      responseStatuscode.badRequest,
      (error as Error).message,
      res
    );
  }
};

// Get Lecture
export const getLecture = async (req: Request, res: Response) => {
  try {
    const lectureData = await readData<LectureEntity>(req.params.id, LectureModelEntity);

    if (
      lectureData.success &&
      lectureData.statusCode === responseStatuscode.success
    ) {
      return SuccessResponse(fetched("Lecture"), lectureData.data, res);
    }

    if (lectureData.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        lectureData.statusCode,
        fetchingFail("Lecture"),
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

// Get Specific Lecture
export const getLectures = async (req: Request, res: Response) => {
  try {
    const validData = validateData(req.body, res);
    if (validData === true) {
      const lecturesData = await readDataById<LectureEntity>(req.body.payload, LectureModelEntity);

      if (
        lecturesData.success &&
        lecturesData.statusCode === responseStatuscode.success
      ) {
        return SuccessResponse(fetched("Lectures"), lecturesData.data, res);
      }

      if (lecturesData.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          lecturesData.statusCode,
          fetchingFail("Lectures"),
          res
        );
      }
    }
  } catch (error) {
    return FailureResponse(
      responseStatuscode.badRequest,
      (error as Error).message,
      res
    );
  }
};

// Get All Lectures
export const getAllLectures = async (req: Request, res: Response) => {
  try {
    const alllecturesData = await readAllData<LectureEntity>(LectureModelEntity);

    if (
      alllecturesData.success &&
      alllecturesData.statusCode === responseStatuscode.success
    ) {
      return SuccessResponse(fetched("Lectures"), alllecturesData.data, res);
    }

    if (alllecturesData.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        alllecturesData.statusCode,
        fetchingFail("Lectures"),
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

// Update Lecture
export const updateLecture = async (req: Request, res: Response) => {
  try {
    const validData = validateData(req.body, res);
    if (validData === true) {
      const updateLecture = await updateData<UpdateLecturePayload>(
        req.body,
        LectureModelEntity,
        req.params.id
      );

      if (
        updateLecture.success &&
        updateLecture.statusCode === responseStatuscode.dataSuccess
      ) {
        return SuccessResponse(updated("Lecture"), updateLecture.data, res);
      }

      if (updateLecture.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          updateLecture.statusCode,
          updatingFail("Lecture"),
          res
        );
      }
    }
  } catch (error) {
    return FailureResponse(
      responseStatuscode.badRequest,
      (error as Error).message,
      res
    );
  }
};

// Delete Lecture
export const deleteLecture = async (req: Request, res: Response) => {
  try {
    const deleteLecture = await deleteData<LectureEntity>(req.params.id, LectureModelEntity);

    if (
      deleteLecture.success &&
      deleteLecture.statusCode === responseStatuscode.dataSuccess
    ) {
      return SuccessResponse(deleted("Lecture"), deleteLecture.data, res);
    }

    if (deleteLecture.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        deleteLecture.statusCode,
        deletingFail("Lecture"),
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