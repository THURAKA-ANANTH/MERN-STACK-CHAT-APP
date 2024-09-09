const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.ycjhscl.mongodb.net/chatappmern?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
