// Connect to MongoDB Atlas using Mongoose
const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    await mongoose.connect(process.env.MONGODBATLAS_URI);
    console.log('Connected to MongoDB Atlas'); }

module.exports = {connectDB, mongoose};
