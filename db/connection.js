const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

// Database connection
const option = { useNewUrlParser: true }
const promise = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cakes-store', option);
