//JCNCqHrHysMjud8h -- atlas-password
const express = require("express");
const model = require("../models/user");
const User = model.User;
const router = express.Router();

// Route to create a new user
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send("Your Admission and Payment is successfully Done");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/edit", async (req, res) => {
  try {
    const user = req.body;
    const find_user = await User.find({ email: user.email });

    if (find_user.length) {
      const doc = await User.findByIdAndUpdate(
        { _id: find_user[0]._id },
        user,
        { new: true }
      );
      res.status(201).send("Your Profile is Updated Successfully");
    } else {
      res.status(201).send("No User Found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/delete", async (req, res) => {
  try {
    const user = req.body;
    const find_user = await User.find({ email: user.email });

    if (find_user.length) {
      const doc = await User.findByIdAndDelete(
        { _id: find_user[0]._id },
        user,
        { new: true }
      );
      res.status(201).send("Your Profile is Deleted Successfully");
    } else {
      res.status(201).send("No User Found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
exports.router = router;
