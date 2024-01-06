const express = require("express");
const app = express();
const router = require("./router/auth-router");

app.use("/", router);


const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
