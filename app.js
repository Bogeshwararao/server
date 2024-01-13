// Load environment variables first
require("dotenv").config();

const express = require("express");
const app = express();
const router = require('./router/auth-router'); 
const connectDb = require("./util/db");
app.use(express.json());

app.use("/api", router);

const PORT = 5001;

// Use the environment variable loaded from the .env file
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
});
