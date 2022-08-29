import { Request, Response } from "express";
import { created, creatingFail, deleted, deletingFail, FailureResponse, fetched, fetchingFail, responseStatuscode, SuccessResponse, updated, updatingFail } from "../helper";
import { CourseModelEntity } from "../models";
import { AddCoursePayload, CourseEntity, UpdateCoursePayload } from "../type";
import { addData, deleteData, readAllData, readData, readDataById, updateData } from "./base_controller";
import { validateData } from "./validation_controller";

// Add Course
export const addCourse = async (req: Request, res: Response) => {
  try {
    const validData = validateData(req.body, res);
    if (validData === true) {
      const User = false;
      const addCourse = await addData<AddCoursePayload>(
        req.body,
        CourseModelEntity,
        User
      );

      if (
        addCourse.success &&
        addCourse.statusCode === responseStatuscode.dataSuccess
      ) {
        return SuccessResponse(created("Course"), addCourse.data, res);
      }

      if (addCourse.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          addCourse.statusCode,
          creatingFail("Course"),
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

// Get Course
export const getCourse = async (req: Request, res: Response) => {
  try {
    const courseData = await readData<CourseEntity>(req.params.id, CourseModelEntity);

    if (
      courseData.success &&
      courseData.statusCode === responseStatuscode.success
    ) {
      return SuccessResponse(fetched("Course"), courseData.data, res);
    }

    if (courseData.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        courseData.statusCode,
        fetchingFail("Course"),
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

// Get Specific Courses
export const getCourses = async (req: Request, res: Response) => {
  try {
    const validData = validateData(req.body, res);
    if (validData === true) {
      const coursesData = await readDataById<CourseEntity>(req.body.payload, CourseModelEntity);

      if (
        coursesData.success &&
        coursesData.statusCode === responseStatuscode.success
      ) {
        return SuccessResponse(fetched("Courses"), coursesData.data, res);
      }

      if (coursesData.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          coursesData.statusCode,
          fetchingFail("Courses"),
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

// Get All Course
export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const allcoursesData = await readAllData<CourseEntity>(CourseModelEntity);

    if (
      allcoursesData.success &&
      allcoursesData.statusCode === responseStatuscode.success
    ) {
      return SuccessResponse(fetched("Courses"), allcoursesData.data, res);
    }

    if (allcoursesData.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        allcoursesData.statusCode,
        fetchingFail("Courses"),
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

// Update Course
export const updateCourse = async (req: Request, res: Response) => {
  try {
    const validData = validateData(req.body, res);
    if (validData === true) {
      const updateCourse = await updateData<UpdateCoursePayload>(
        req.body,
        CourseModelEntity,
        req.params.id
      );

      if (
        updateCourse.success &&
        updateCourse.statusCode === responseStatuscode.dataSuccess
      ) {
        return SuccessResponse(updated("Course"), updateCourse.data, res);
      }

      if (updateCourse.statusCode === responseStatuscode.badRequest) {
        return FailureResponse(
          updateCourse.statusCode,
          updatingFail("Course"),
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

// Delete Course
export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const deleteCourse = await deleteData<CourseEntity>(req.params.id, CourseModelEntity);

    if (
      deleteCourse.success &&
      deleteCourse.statusCode === responseStatuscode.dataSuccess
    ) {
      return SuccessResponse(deleted("Course"), deleteCourse.data, res);
    }

    if (deleteCourse.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        deleteCourse.statusCode,
        deletingFail("Course"),
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
