const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
// require('dotenv').config();
const { connectDB } = require("./config/db");
const { customRouter } = require("./routes/customRoute");
const { errorHandler } = require("./middleware/errorHandler")


const app = express();
const port = process.env.PORT || 5001;
dotenv.config({path: './config/config.env'});
//connectDB();
app.use(express.json());
app.use(cors());

app.use("/api/v1/",customRouter);
// app.use("/api/v1/post/", postsRouter);
// app.use("/api/v1/comment/", commentRouter);
// app.use("/api/v1/follow/", followRouter);
app.use(errorHandler);


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
});
