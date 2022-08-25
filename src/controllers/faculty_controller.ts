import { Request, Response } from "express";
import { created, creatingFail, deleted, deletingFail, FailureResponse, fetched, fetchingFail, responseStatuscode, SuccessResponse, updated, updatingFail } from "../helper";
import { FacultyModelEntity } from "../models";
import { AddFacultyPayload, AddUserPayload, FacultyEntity, UpdateFacultyPayload } from "../type";
import { addData, deleteData, readAllData, readData, readDataById, updateData } from "./base_controller";

interface AddUserFacultyPayload extends AddFacultyPayload,AddUserPayload{}

// Add Faculty
export const addFaculty = async (req: Request, res: Response) => {
    try {
      const User = true;
      const addFaculty = await addData<AddUserFacultyPayload >(
        req.body,
        FacultyModelEntity,
        User
      );
  
      if (
        addFaculty.success &&
        addFaculty.statusCode === responseStatuscode.dataSuccess
      ) {
        return SuccessResponse(created("Faculty"), addFaculty.data, res);
      }
      if (addFaculty.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          addFaculty.statusCode,
          creatingFail("Faculty"),
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
  
  // Get Faculty
  export const getFaculty = async (req: Request, res: Response) => {
    try {
      const facultyData = await readData<FacultyEntity>(req.params.id, FacultyModelEntity);
  
      if (
        facultyData.success &&
        facultyData.statusCode === responseStatuscode.success
      ) {
        return SuccessResponse(fetched("Faculty"), facultyData.data, res);
      }
  
      if (facultyData.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          facultyData.statusCode,
          fetchingFail("Faculty"),
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
  
  // Get Specific Faculty
  export const getFaculties = async (req: Request, res: Response) => {
    try {
      const facultiesData = await readDataById<FacultyEntity>(req.body.payload, FacultyModelEntity);
  
      if (
        facultiesData.success &&
        facultiesData.statusCode === responseStatuscode.success
      ) {
        return SuccessResponse(fetched("Faculties"), facultiesData.data, res);
      }
  
      if (facultiesData.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          facultiesData.statusCode,
          fetchingFail("Faculties"),
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
  
  // Get All Faculties
  export const getAllFaculties = async (req: Request, res: Response) => {
    try {
      const allfacultiesData = await readAllData<FacultyEntity>(FacultyModelEntity);
  
      if (
        allfacultiesData.success &&
        allfacultiesData.statusCode === responseStatuscode.success
      ) {
        return SuccessResponse(fetched("Faculties"), allfacultiesData.data, res);
      }
  
      if (allfacultiesData.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          allfacultiesData.statusCode,
          fetchingFail("Faculties"),
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
  
  // Update Faculty
  export const updateFaculty = async (req: Request, res: Response) => {
    try {
      const updateFaculty = await updateData<UpdateFacultyPayload>(
        req.body,
        FacultyModelEntity,
        req.params.id
      );
  
      if (
        updateFaculty.success &&
        updateFaculty.statusCode === responseStatuscode.dataSuccess
      ) {
        return SuccessResponse(updated("Faculty"), updateFaculty.data, res);
      }
  
      if (updateFaculty.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          updateFaculty.statusCode,
          updatingFail("Faculty"),
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
  
  // Delete Faculty
  export const deleteFaculty = async (req: Request, res: Response) => {
    try {
      const deleteFaculty = await deleteData<FacultyEntity>(req.params.id, FacultyModelEntity);
  
      if (
        deleteFaculty.success &&
        deleteFaculty.statusCode === responseStatuscode.dataSuccess
      ) {
        return SuccessResponse(deleted("Faculty"), deleteFaculty.data, res);
      }
  
      if (deleteFaculty.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          deleteFaculty.statusCode,
          deletingFail("Faculty"),
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
  