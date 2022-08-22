export enum responseMessage {
    created = "Created successfully",
    updated = "Updated successfully",
    deleted = "Deleted successfully",
    fetched = "Fetched successfully",
    fetchingFail = "Failed to fetch",
    creatingFail = "Failed to create",
    updatingFail = "Failed to update",
    deletingFail = "Failed to delete",
    unauthorized = "Method not allowed",
    alreadyExists = "Already exists"
}

export const created = (msg:string) => {
    return msg + " Created Successfully"
}
export const updated = (msg:string) => {
    return msg + " Updated Successfully"
}
export const deleted = (msg:string) => {
    return msg + " Deleted Successfully"
}
export const fetched = (msg:string) => {
    return msg + " Fetched Successfully"
}
export const fetchingFail = (msg:string) => {
    return msg + " Failed to fetch"
}
export const creatingFail = (msg:string) => {
    return msg + " Failed to create"
}
export const updatingFail = (msg:string) => {
    return msg + " Failed to update"
}
export const deletingFail = (msg:string) => {
    return msg + " Failed to delete"
}
export const unauthorized = (msg?:string) => {
    return msg + " Method Not Allowed"
}
export const alreadyExists = (msg:string) => {
    return msg + " Already Exists"
}