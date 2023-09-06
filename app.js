const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
require("./src/store/db");

const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("progress pulse");
})

app.listen(PORT, () => {
    console.log(`server is running at :- http://localhost:${PORT}`);
})

