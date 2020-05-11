const { fetchUsersById } = require("../models/users.model.js");

exports.getUsersById = (req, res, next) => {
  const { username } = req.params;

  fetchUsersById(username)
    .then((user) => {
      res.status(200).send({ user: user });
    })
    .catch((err) => {
      next(err);
    });
};
