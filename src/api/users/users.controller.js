users = {};
const User = require("./models/User");

users.create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (e) {
    res.status(500).send();
  }
};

users.findAll = async (req, res) => {
  try {
    res.status(200).send(await User.find());
  } catch (e) {
    res.status(500).send();
  }
};

users.findOne = async (req, res) => {
  try {
    res.status(200).send(await User.findById({ _id: req.params.id }));
  } catch (e) {
    res.status(500).send();
  }
};

users.update = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
};

users.remove = async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = users;
