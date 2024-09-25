const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
    })
    console.log('MongoDB connected successfully')
  } catch (e) {
    console.error('error in database ', e.message);
    process.exit(1);
  }
}
module.exports = connectDB;