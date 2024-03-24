require("dotenv").config();
const app = require("./server");
const model = require("./models");



const startServer = async () => {
  try {
    app.listen(process.env.PORT || 8000, () => {
      console.log("server started on port  " + process.env.PORT);
    });
  } catch (error) {
    console.log("server setup failed: " + error);
  }
};

startServer();
