const mongoose = require('mongoose');

const connectDb = () => {
  return mongoose.connect('mongodb://localhost/banks', {useNewUrlParser: true, useUnifiedTopology: true});
}

const schema = new mongoose.Schema({
  name: String,
  logo: String,
  link: String
});

var Bank = mongoose.model('Bank', schema);


module.exports.connectDb = connectDb;
module.exports.Banks = Bank;