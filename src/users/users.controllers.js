const User = require("./models/User");

exports.create = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ email });
  if (user) {
    res.status(200).send(user);
  } else {
    const newUser = new User(req.body);
    res.status(200).send(newUser);
  }
};

exports.findAll = async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
};

exports.findOne = async (req, res) => {
  const user = await User.findById({ _id: req.params._id });
  res.status(200).send(user);
};

exports.update = async (req, res) => {
  await User.findByIdAndUpdate(
    { _id: req.params._id },
    { $set: req.body }
  );
  res.status(200).send(req.body);
};

exports.remove = async (req, res) => {
  const user = await User.findByIdAndDelete({ _id: req.params._id });
  res.status(200).send();
};
