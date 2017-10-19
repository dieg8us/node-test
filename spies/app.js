var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // Check if the email exist
  // Save the user to the databse
  db.saveUser({ email, password });
  // Send the wellcome email
};
