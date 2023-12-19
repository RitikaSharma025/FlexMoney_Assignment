require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const registerUser = require('./routes/Registeruser');
const path = require('path');
const cors = require('cors');
// Create an instance of the Express app
const app = express();


// Set up MongoDB connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MON_URL);
  console.log('database connected')
}


// Set up middleware
app.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
app.use(cors());
app.use(express.json());
app.use('/',usersRouter.router);
app.use('/',registerUser.router);
app.use('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'))
})
// Define routes
// Add routes here

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
