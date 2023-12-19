const mongoose = require('mongoose');

// Create a User schema
const userSchema = new mongoose.Schema({
  email: {
    type : String,
    required : true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 65,
  },
  batch: {
    type: String,
    enum: ['6-7AM', '7-8AM', '8-9AM', '5-6PM'],
    required: true,
  },
  Datejoin :{
    type: String,
    required:true,
  }
});

// Create a User model using the schema
const User = mongoose.model('users', userSchema);

// Export the model
exports.User = User;
