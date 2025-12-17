import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
// import httpMethodHandler from "./utils/httpMethodHandler.js";
import unknownRouterHandler from "./utils/unknownRouteHandler.js";
import apiErrorHandle from "./utils/errorHandler.js";
import logger from "./utils/logger.js";
import userRouter from "./routes/user.route.js";
dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// app.use(httpMethodHandler());
app.use(logger);

//Routes
app.get("/", (req, res) => {
  res.status(200).json("API is running...");
});
app.use("/users", userRouter);

app.use(apiErrorHandle);
app.use(unknownRouterHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  //Call mongodb database
  connectDb();
  console.log(`🟢 Server is running... [Port:${PORT}]`);
});
