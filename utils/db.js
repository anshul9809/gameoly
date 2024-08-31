const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console,"Unable to connect to db"));

db.once("open", function(){
    console.log("Connected to db")
});

module.exports = db;