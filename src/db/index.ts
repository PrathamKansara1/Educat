import { connect } from "mongoose";
import { config } from "../config";

const connectMongoDb = async () => {
  try {
    if (!config.mongoDbUrl) throw new Error("mongoDbUrl not found");
    await connect(config.mongoDbUrl);
    console.log("mongoDb Connected !");
  } catch (error: any) {
    console.log("[DB] mongoDb couldn't connect : " + error.message);
  }
};

export { connectMongoDb };
