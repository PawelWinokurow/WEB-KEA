var express = require('express');
var db = require('./database')
var soap = require('./soap')
var email = require('./email')
var random = require('./random')
var app = express();

db.connect();
app.use(express.json());

app.all("/request", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  let mask = req.body;
  
  if (mask.isDirect) {
    soap.sendMask(mask);
  } else {
    const hash = random.generateHash();
    db.storeMask(hash, mask);
    email.sendEmail(hash, mask.emailTo);
  }
  next();
});

app.all("/confirm", function (req, res, next) {
  db.checkConfirmation(req.query.hash)
    .then(mask => {
      soap.sendMask(mask);
      res.send('<p>Success! The mask was confirmed.</p>');
      next();
    })
    .catch(() => {
      res.send('<p>Error! The mask was not confirmed.</p>');
      next();
    })

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000.');
});