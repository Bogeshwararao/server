const express = require("express");
const app = express();

const router = require('./router/auth-router'); 

app.use("/api", router);

const PORT = 5002;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
