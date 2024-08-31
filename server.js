require("dotenv").config();
const express = require("express");
const { errorHandler, notFound } = require("./middlewares/errorHandler");
const app = express();
const db = require("./utils/db");
const bodyParser = require("body-parser");
const morgan = require("morgan")

app.use(morgan());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 8000;

app.use("/api/v1", require("./routes/index"));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
    return
});