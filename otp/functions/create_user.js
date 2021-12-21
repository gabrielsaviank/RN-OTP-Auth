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

  // respond to user request
  res.send(req.body);
};
