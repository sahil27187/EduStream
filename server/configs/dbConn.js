// import mongoose from "mongoose";

// /**
//  * mongoose.set("strictQuery", false); sets Mongoose's query strictness to false.
//  * This means that Mongoose will not return an error if you try to query for a
//  * non-existent field. Instead, it will simply return an empty result.
//  * With strict query set to true, Mongoose will return an error if you try to
//  * query for a non-existent field.
//  */
// mongoose.set("strictQuery", false);

// const connectToDB = async () => {
//   try {
//     const { connection } = await mongoose.connect(
//       process.env.MONGO_URI 
//     );

//     if (connection) {
//       console.log(`Connected to MongoDB: ${connection.host}`);
//     }
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// export default connectToDB;
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

console.log('Mongo URI:', process.env.MONGO_URI);

mongoose.set("strictQuery", false);

const connectToDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (connection) {
      console.log(`Connected to MongoDB: ${connection.host}`);
    }
  } catch (error) {
    console.log('Connection error:', error);
    process.exit(1);
  }
};

export default connectToDB;

// Call the connectToDB function
connectToDB();
