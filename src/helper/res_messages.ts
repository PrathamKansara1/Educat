export const created = (msg: string) => {
    return msg + " Created Successfully"
}
export const updated = (msg: string) => {
    return msg + " Updated Successfully"
}
export const deleted = (msg: string) => {
    return msg + " Deleted Successfully"
}
export const fetched = (msg: string) => {
    return msg + " Fetched Successfully"
}
export const fetchingFail = (msg: string) => {
    return msg + " Failed to fetch"
}
export const creatingFail = (msg: string) => {
    return msg + " Failed to create"
}
export const updatingFail = (msg: string) => {
    return msg + " Failed to update"
}
export const deletingFail = (msg: string) => {
    return msg + " Failed to delete"
}
export const unauthorized = (msg?: string) => {
    return msg + " Method Not Allowed"
}
export const alreadyExists = (msg: string) => {
    return msg + " Already Exists"
}
export const validationMessages = (param:string) => {
    const msgs = {
        'string.base': `${param} should be a type of 'text'`,
        'string.empty': `${param} cannot be an empty field`,
        'string.min': `${param} is not having minimum length `,
        'string.max': `${param} is greater than maximum length`,
        'string.pattern.base': `${param} field is not patterned`,
        'any.required': `${param} is a required field`,
        'array.base': `${param} should be a type of 'array'`,
        'array.min': `${param} is not having minimum length`,
        'array.max': `${param} is not having minimum length`,
        'number.base': `${param} should be a type of 'number'`,
        'number.empty': `${param} cannot be an empty field`,
        'number.min': `${param} is not having minimum length `,
        'number.max': `${param} is greater than maximum length`,
        'number.positive': `${param} is not positive`,
        'number.negative': `${param} is not negative`,
    }

    return msgs
}