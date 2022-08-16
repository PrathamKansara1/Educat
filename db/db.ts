import { connect } from "mongoose";

const connection = async () => {
  try {
    await connect(process.env.MONGODB_URL as string);
    console.log("Database Connected successfully !");
  } catch (error) {
    console.log("database could not connect due to " + error);
  }
};

export { connection };
