module.exports = function(req, res) {
  if (!req.body.phone || !req.body.code) {
    return res.status(422).send({error: "Phone and code must be provided"});
  }

  const phone = String(req.boy).replace(/[ˆ\d]/g, "");
  const code = parseInt(code);
};
