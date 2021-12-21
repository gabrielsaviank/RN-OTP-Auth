const admin = require("firebase-admin");

module.exports = (req, res) => {
  // Verify the user provided phone
  if (!req.body.phone) {
    return res.status(422).send({
      error: "Bad Input",
    });
  }

  // format the phone to remove dashes and parenthesis
  const phone = String(req.body.phone).replace(/[^\d]/g);
  // create a new user account using the phone nummer
  admin.auth().createUser({
    uuid: phone,
  }).then((user) => {
    res.send(user);
  }).catch((err) => res.status(422).send({error: err}));

  // respond to user request
  res.send(req.body);
};
