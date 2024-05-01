const mongoose = require('mongoose');

const simsDbUri = "mongodb+srv://esraelwendimu:esraelwendimu@cluster0.zckzfr9.mongodb.net/sims_db";
 
const simsDbConnection = mongoose.createConnection(simsDbUri);
simsDbConnection.on('open', () => {
  console.log('Connected to sims_db');
});

module.exports = { simsDbConnection }