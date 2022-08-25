import { BaseResHandler, responseStatuscode } from "../helper";
import { UserModelEntity } from "../models";
import { BasicPayloadEntity } from "../type";

// add Data
export async function addData<T extends BasicPayloadEntity>(
  payload: T,
  model: any,
  User: boolean
): Promise<BaseResHandler<T>> {

  if(User){
    const findUser = await UserModelEntity.findOne(payload.email ? { email: payload.email } : {name: payload.name});
  console.log(findUser);
  
  if (findUser) {
    return {
      data: null,
      success: false,
      statusCode: responseStatuscode.badRequest,
    };
  }
    const { role , name , email , password , avatar , phone , address , dateOfBirth , ...restData } = payload;
    const userData = {
      role ,
      name ,
      email ,
      password ,
      avatar ,
      phone ,
      address ,
      dateOfBirth : dateOfBirth
    }

    const addUser =  new UserModelEntity(userData);
    const saveUser = await addUser.save();

    restData.userId = saveUser._id;

    const addData = new model(restData);
    const saveData = await addData.save();
    
    if(!saveUser || !saveData) {
      return {
        data: null,
        success: false,
        statusCode: responseStatuscode.internalServerError,
      };
    }

    const data = {addData,addUser}

    return {
      data: data,
      success: true,
      statusCode: responseStatuscode.dataSuccess,
    };

  }else{

    const findData = await model.findOne(payload.email ? { email: payload.email } : {name: payload.name});
    if (findData) {
      return {
        data: null,
        success: false,
        statusCode: responseStatuscode.badRequest,
      };
    }
    const addData = new model(payload);
  
    const saveData = await addData.save();
  
    if (!saveData) {
      return {
        data: null,
        success: false,
        statusCode: responseStatuscode.internalServerError,
      };
    }
  
    return {
      data: addData,
      success: true,
      statusCode: responseStatuscode.dataSuccess,
    };
  } 
}

// Read Data
export async function readData<T>(
  id: string,
  model: any
): Promise<BaseResHandler<T>> {
  const getData = await model.findOne({ _id: id });

  if (!getData) {
    return {
      data: null,
      success: false,
      statusCode: responseStatuscode.notFound,
    };
  }

  return {
    data: getData,
    success: true,
    statusCode: responseStatuscode.success,
  };
}

// Read Data by specific ids
export async function readDataById<T>(
  payload: [],
  model: any
): Promise<BaseResHandler<T>> {
  const getData = await model.find({ _id: { $in: payload } });

  if (getData.length === 0) {
    return {
      data: null,
      success: false,
      statusCode: responseStatuscode.notFound,
    };
  }

  return {
    data: getData,
    success: true,
    statusCode: responseStatuscode.success,
  };
}

// Read All Data
export async function readAllData<T>(model: any): Promise<BaseResHandler<T>> {
  const getAllData = await model.find();

  if (getAllData.length === 0) {
    return {
      data: null,
      success: false,
      statusCode: responseStatuscode.notFound,
    };
  }

  return {
    data: getAllData,
    success: true,
    statusCode: responseStatuscode.success,
  };
}

// Update Data
export async function updateData<T>(
  payload: T,
  model: any,
  id: string
): Promise<BaseResHandler<T>> {
  const updateData = await model.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  if (!updateData) {
    return {
      data: null,
      success: false,
      statusCode: responseStatuscode.badRequest,
    };
  }

  return {
    data: updateData,
    success: true,
    statusCode: responseStatuscode.dataSuccess,
  };
}

// Delete Data
export async function deleteData<T>(
  id: string,
  model: any
): Promise<BaseResHandler<T>> {
  const deleteData = await model.findOneAndDelete({ _id: id });
  if (!deleteData) {
    return {
      data: null,
      success: false,
      statusCode: responseStatuscode.badRequest,
    };
  }

  return {
    data: deleteData,
    success: true,
    statusCode: responseStatuscode.dataSuccess,
  };
}