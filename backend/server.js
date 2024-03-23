const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

app.use(cookieParser());

app.use(express.json());

// import routes
const userRouter = require("./routes/user.routes");

// route declarations
app.use("/api/users", userRouter);

module.exports = app;
