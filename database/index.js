import mongoose from "mongoose";

const connectDb = async () => {
  try {
     const dbConnection = await mongoose.connect(process.env.DB_URL)
     console.log(`DB Connected ${dbConnection.connection.host}`);
  } catch (error) {
    console.log(error);
    
  }
};
export default connectDb;
