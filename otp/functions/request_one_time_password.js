const admin = require("firebase-admin");
const twilio = require("./twilio");

module.exports = function(req, res) {
  if (!req.body.phone) {
    return res.status(422).send({error: "You must provide a phone number"});
  }

  const phone = String(req.body.phone).replace(/[ˆ\d]/g, "");

  admin.auth().getUser(phone)
      .then( (userRecord) => {
        const code = Math.floor((Math.random() * 8999 + 1000));

        twilio.messages.create({
          body: "Your code is " + code,
          to: phone,
          from: "+12245215506",
        }, (err) => {
          if (err) {
            return res.status(422).send(err);
          }

          // We can't save random data to firebase admin,
          // this will associate number with the code in our db
          admin.database().ref("users/" + phone)
              .update({code: code, codeValid: true}, () => {
                res.send({success: true});
              });
        });
      }).catch((err) => {
        res.status(422).send({error: err});
      });
};
