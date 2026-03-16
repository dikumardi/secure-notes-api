const mongoose = require('mongoose');

async function connectDB() {

  await mongoose.connect(process.env.MONGO_URI)
  .then(() => { console.log('Database Connected Successfully'); })
  .catch((err) => { console.log('Failed to connect to DB', err); });
    }

    module.exports =connectDB;