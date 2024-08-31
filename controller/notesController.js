const expressAsyncHandler = require("express-async-handler");
const Notes = require("../models/Notes");

const createNote = expressAsyncHandler(async (req,res)=>{
    const {title,description} = req.body;
    if(!title || !description){
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    const new_note = await Notes.create({
        title,
        description
    });

    // or second way is
    // const new_note = await Notes.create(req.body); 

    if(!new_note){
        res.status(500);
        throw new Error("Unable to create Note");
    }
    res.status(200).json({
        message:"Note Created Successfully",
        note:new_note
    });
});

const updateNote = expressAsyncHandler(async (req,res)=>{
    const {title, description} = req.body;
    const {id} = req.params;

    if(!title){
        res.status(400);
        throw new Error("Title cannot be empty");
    }
    if(!description){
        throw new Error("Please provide a description")
    }

    const note = await Notes.findByIdAndUpdate(id,{
        title,
        description
    },{
        new:true
    });
    if(!note){
        res.status(404);
        throw new Error("Note not found");
    }
    res.status(200).json({
        message:"Note updated Successfuly",
        note:note
    });
});

const getSingleNote = expressAsyncHandler(async (req,res)=>{
    const {id} = req.params;

    const note = await Notes.findById(id);
    if(!note){
        res.status(404);
        throw new Error("Note not found");
    }

    res.status(200).json(note);
});

const getAllNotes = expressAsyncHandler(async (req,res)=>{
    const notes = await Notes.find({});
    if(notes.length === 0){
        res.status(200);
        throw new Error("No notes found");
    }
    res.status(200).json({
        notes
    });
});

const deleteNote = expressAsyncHandler(async (req,res)=>{
    const {id} = req.params;
    const deletedNote = await Notes.findByIdAndDelete(id);
    if(!deletedNote){
        res.status(404);
        throw new Error("Note not found");
    }
    res.status(200).json({
        message:"Note deleted Successfully",
        // deletedNote  , in case if we needed to send the deleted not to front end
    });
});


module.exports = {
    createNote,
    updateNote,
    getSingleNote,
    getAllNotes,
    deleteNote
}