// dbManager.js
const mongoose = require('mongoose');
require("dotenv").config();

const connections = {};

const connectToDatabase = async (dbName, dbUri) => {
  if (connections[dbName]) {
    console.log(`Already connected to ${dbName}`);
    return connections[dbName];
  }

  try {
    const connection = await mongoose.createConnection(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.on('connected', () => {
      console.log(`Connected to ${dbName}`);
    });

    connections[dbName] = connection;
    return connection;
  } catch (error) {
    console.error(`Error connecting to ${dbName}:`, error);
    throw error;
  }
};

const disconnectFromDatabases = async () => {
  for (const dbName in connections) {
    if (connections[dbName]) {
      await connections[dbName].close();
      console.log(`Disconnected from ${dbName}`);
      delete connections[dbName];
    }
  }
};

module.exports = { connectToDatabase, disconnectFromDatabases };
