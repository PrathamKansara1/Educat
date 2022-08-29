import { Response } from "express";
import { creatingFail, FailureResponse } from "../helper";
import { dataValidate } from "../middleware/validate_data"

export function validateData(data: object, res: Response) {
    const validateData = dataValidate(data);
    if (validateData !== undefined) {
        return FailureResponse(
            500,
            creatingFail(validateData),
            res
        );
    } else {
        return true;
    }
}