const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

//@route   Get api/contacts
//@desc    Get all users contact
// access  Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   Post api/contacts
//@desc    Add new contact
// access  Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is require")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

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
  res.send("Delete contact");
});

module.exports = router;
