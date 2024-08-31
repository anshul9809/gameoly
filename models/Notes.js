const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
    title: {
        type:String,
        required:[true,"Please enter a title"]
    },
    description:{
        type:String,
        required:[true, "Please enter the description"]
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Notes", NotesSchema);