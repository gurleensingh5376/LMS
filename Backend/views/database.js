const mongoose = require('mongoose');

const connectDB = async () => {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb is connected with ${connection.host}`);
};

module.exports = {connectDB};