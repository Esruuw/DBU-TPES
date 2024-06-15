// jest.setup.js
const { connectToDatabase, disconnectFromDatabases } = require('./dbManager');
const mongoose = require('mongoose');

require('./models/userDetails');

beforeAll(async () => {
  await connectToDatabase('attendance_db', process.env.ATTENDANCE_DB_URI);
  await connectToDatabase('sims_db', process.env.SIMS_DB_URI);
});

afterAll(async () => {
  await disconnectFromDatabases();
});
