import { Response,Request } from "express";
import { created, creatingFail, deleted, deletingFail, FailureResponse, fetched, fetchingFail, responseStatuscode, SuccessResponse, updated, updatingFail } from "../helper";
import { StudentModelEntity } from "../models";
import { AddStudentPayload, AddUserPayload, StudentEntity, UpdateStudentPayload } from "../type";
import { addData, deleteData, readAllData, readData, readDataById, updateData } from "./base_controller";

interface AddUserStudentPayload extends AddStudentPayload,AddUserPayload{}

// Add Student
export const addStudent = async (req: Request, res: Response) => {
    try {
      const User = true;
      const addStudent = await addData<AddUserStudentPayload>(
        req.body,
        StudentModelEntity,
        User
      );
  
      if (
        addStudent.success &&
        addStudent.statusCode === responseStatuscode.dataSuccess
      ) {
        return SuccessResponse(created("Student"), addStudent.data, res);
      }
  
      if (addStudent.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          addStudent.statusCode,
          creatingFail("Student"),
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
  
  // Get Student
  export const getStudent = async (req: Request, res: Response) => {
    try {
      const studentData = await readData<StudentEntity>(req.params.id, StudentModelEntity);
  
      if (
        studentData.success &&
        studentData.statusCode === responseStatuscode.success
      ) {
        return SuccessResponse(fetched("Student"), studentData.data, res);
      }
  
      if (studentData.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          studentData.statusCode,
          fetchingFail("Student"),
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
  
  // Get Specific Students
  export const getStudents = async (req: Request, res: Response) => {
    try {
      const studentsData = await readDataById<StudentEntity>(req.body.payload,StudentModelEntity);
  
      if (
        studentsData.success &&
        studentsData.statusCode === responseStatuscode.success
      ) {
        return SuccessResponse(fetched("Students"), studentsData.data, res);
      }
  
      if (studentsData.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          studentsData.statusCode,
          fetchingFail("Students"),
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
  
  // Get All Students
  export const getAllStudents = async (req: Request, res: Response) => {
    try {
      const allstudentsData = await readAllData<StudentEntity>(StudentModelEntity);
  
      if (
        allstudentsData.success &&
        allstudentsData.statusCode === responseStatuscode.success
      ) {
        return SuccessResponse(fetched("Students"), allstudentsData.data, res);
      }
  
      if (allstudentsData.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          allstudentsData.statusCode,
          fetchingFail("Students"),
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
  
  // Update Student
  export const updateStudent = async (req: Request, res: Response) => {
    try {
      const updateStudent = await updateData<UpdateStudentPayload>(
        req.body,
        StudentModelEntity,
        req.params.id
      );
  
      if (
        updateStudent.success &&
        updateStudent.statusCode === responseStatuscode.dataSuccess
      ) {
        return SuccessResponse(updated("Student"), updateStudent.data, res);
      }
  
      if (updateStudent.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          updateStudent.statusCode,
          updatingFail("Student"),
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
  
  // Delete Student
  export const deleteStudent = async (req: Request, res: Response) => {
    try {
      const deleteStudent = await deleteData<StudentEntity>(req.params.id, StudentModelEntity);
  
      if (
        deleteStudent.success &&
        deleteStudent.statusCode === responseStatuscode.dataSuccess
      ) {
        return SuccessResponse(deleted("Student"), deleteStudent.data, res);
      }
  
      if (deleteStudent.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          deleteStudent.statusCode,
          deletingFail("Student"),
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
  