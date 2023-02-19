const mongoose = require('mongoose');
const config = require('config');
//const db = config.get('mongooURI')

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/devConnector", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
