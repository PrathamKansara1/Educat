import { Request, Response } from "express";
import { AddSuperAdminPayload, AddUserPayload, SuperAdminEntity, UpdateSuperAdminPayload } from "../type";
import {
  addData,
  deleteData,
  readAllData,
  readData,
  readDataById,
  updateData,
} from "./base_controller";
import { SuperAdminModelEntity } from "../models";
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

interface AddUserAdminPayload extends AddSuperAdminPayload,AddUserPayload{}

// Add Admin
export const addAdmin = async (req: Request, res: Response) => {
  try {
    const User = true;
    const addAdmin = await addData<AddUserAdminPayload>(
      req.body,
      SuperAdminModelEntity,
      User
    );

    if (
      addAdmin.success &&
      addAdmin.statusCode === responseStatuscode.dataSuccess
    ) {
      return SuccessResponse(created("Admin"), addAdmin.data, res);
    }

    if (addAdmin.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        addAdmin.statusCode,
        creatingFail("Admin"),
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

// Get Admin
export const getAdmin = async (req: Request, res: Response) => {
  try {
    const adminData = await readData<SuperAdminEntity>(req.params.id, SuperAdminModelEntity);

    if (
      adminData.success &&
      adminData.statusCode === responseStatuscode.success
    ) {
      return SuccessResponse(fetched("Admin"), adminData.data, res);
    }

    if (adminData.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        adminData.statusCode,
        fetchingFail("Admin"),
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

// Get Specific Admin
export const getAdmins = async (req: Request, res: Response) => {
  try {
    const adminData = await readDataById<SuperAdminEntity>(req.body.payload, SuperAdminModelEntity);

    if (
      adminData.success &&
      adminData.statusCode === responseStatuscode.success
    ) {
      return SuccessResponse(fetched("Admins"), adminData.data, res);
    }

    if (adminData.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        adminData.statusCode,
        fetchingFail("Admins"),
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

// Get All Admins
export const getAllAdmins = async (req: Request, res: Response) => {
  try {
    const alladminData = await readAllData<SuperAdminEntity>(SuperAdminModelEntity);

    if (
      alladminData.success &&
      alladminData.statusCode === responseStatuscode.success
    ) {
      return SuccessResponse(fetched("Admins"), alladminData.data, res);
    }

    if (alladminData.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        alladminData.statusCode,
        fetchingFail("Admins"),
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

// Update Admin
export const updateAdmins = async (req: Request, res: Response) => {
  try {
    const updateAdmin = await updateData<UpdateSuperAdminPayload>(
      req.body,
      SuperAdminModelEntity,
      req.params.id
    );

    if (
      updateAdmin.success &&
      updateAdmin.statusCode === responseStatuscode.dataSuccess
    ) {
      return SuccessResponse(updated("Admin"), updateAdmin.data, res);
    }

    if (updateAdmin.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        updateAdmin.statusCode,
        updatingFail("Admin"),
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

// Delete Admin
export const deleteAdmin = async (req: Request, res: Response) => {
  try {
    const deleteAdmin = await deleteData<SuperAdminEntity>(req.params.id, SuperAdminModelEntity);

    if (
      deleteAdmin.success &&
      deleteAdmin.statusCode === responseStatuscode.dataSuccess
    ) {
      return SuccessResponse(deleted("Admin"), deleteAdmin.data, res);
    }

    if (deleteAdmin.statusCode === responseStatuscode.badRequest) {
      return FailureResponse(
        deleteAdmin.statusCode,
        deletingFail("Admin"),
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