const mongoose = require('mongoose');

// Create a User schema
const registeruserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// Create a User model using the schema
const Registeruser = mongoose.model('Registeruser', registeruserSchema);

// Export the model
exports.User = Registeruser;
