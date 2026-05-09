require("dotenv").config();

const express = require("express");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
    res.send("Logging Middleware Working");
});

app.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "Test Route"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
