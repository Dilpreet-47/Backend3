import dotenv from "dotenv";

import connectDB from "./db/db.js";
dotenv.config({ path: "./.env" });

connectDB();

// import express from "express";
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("Mongo DB connected succesfully!!");

//     app.on("error", (error) => {
//       console.log("Express App Error!!", error);
//       throw error;
//     });

//     app.listen(process.env.PORT || 5000, () => {
//       console.log(`App is listening at port ${process.env.PORT || 5000}`);
//     });
//   } catch (error) {
//     console.error("DB connection Failed!!", error);
//     process.exit(1);
//   }
// })();
