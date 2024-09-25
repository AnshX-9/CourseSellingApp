const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();


function sum(a, b) {
  return a * b
}

sum(1, 2);

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
