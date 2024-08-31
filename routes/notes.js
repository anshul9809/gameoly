const express = require("express");
const router = express.Router();

const {
    createNote,
    updateNote,
    getSingleNote,
    getAllNotes,
    deleteNote
} = require("../controller/notesController");

router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.get("/:id", getSingleNote);

router.get("/", getAllNotes);

module.exports = router;