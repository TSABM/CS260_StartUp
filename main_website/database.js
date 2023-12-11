const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('service');
const userCollection = db.collection('user')
const scoreCollection = db.collection('score');


(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  //get user
  function getUser(email) {
    return userCollection.findOne({ email: email });
  }

  //get user by token
  function getUserByToken(token) {
    return userCollection.findOne({ token: token });
  }

  //create user
  async function createUser(email, password){
  // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);

    return user;
  }

  async function addScore(score) {
    const result = await scoreCollection.insertOne(score);
    return result;
  }
  
  function getHighScores() {
    const query = { score: { $gt: 0, $lt: 900 } };
    const options = {
      sort: { score: -1 },
      limit: 10,
    };
    const cursor = scoreCollection.find(query, options);
    return cursor.toArray();
  }
  
  module.exports = { 
    addScore, 
    getHighScores,
    createUser,
    getUser,
    getUserByToken};