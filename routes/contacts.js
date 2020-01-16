const express = require("express");
const router = express.Router();

//@route   Get api/contacts
//@desc    Get all users contact
// access  Private
router.get("/", (req, res) => {
  res.send("Get all contact");
});

//@route   Post api/contacts
//@desc    Add new contact
// access  Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

//@route   Put api/contacts/:id
//@desc    Update contact
// access  Private
router.put("/:id", (req, res) => {
  res.send("Update contact ");
});

//@route   Delete api/contacts
//@desc    Delete contact
// access  Private
router.delete("/:id", (req, res) => {
  res.send("u");
});

module.exports = router;
