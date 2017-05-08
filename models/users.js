const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//create schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

//hash password
//PRE runs the code before save and after save ie validation code before and then run a callback after save.
UserSchema.pre('save', function(next) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, null, function(hash) {
      user.password = hash;
      next();
    });
  });
});
//compare password
UserSchema.methods.comparePasswords = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = models.Schema(USER, UserSchema);