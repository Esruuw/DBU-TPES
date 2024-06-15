const mongoose = require('mongoose');

let isConnected = false; // Track the connection status

const connect = async () => {
  if (isConnected) {
    console.log('Already connected to database');
    return;
  }

  const dbUri = process.env.MONGO_TEST_URL || 'mongodb://localhost/your_production_db';

  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('Connected to', dbUri);
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error;
  }
};

const close = async () => {
  if (!isConnected) {
    return;
  }

  try {
    await mongoose.connection.close();
    isConnected = false;
    console.log('Disconnected from database');
  } catch (error) {
    console.error('Error disconnecting from database:', error);
    throw error;
  }
};

module.exports = { connect, close };
