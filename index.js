require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const schemas = require('./schemas/index');
const resolvers = require('./resolvers/userResolvers');

const app = express();
const router = require('./router');
const ATLAS_USERNAME = process.env.ATLAS_USERNAME;
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD;

app.use(cors());
app.use(express.json());
app.use(router);

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

mongoose.connect(
  `mongodb+srv://${ATLAS_USERNAME}:${ATLAS_PASSWORD}@divii.ttn8i.mongodb.net/divii?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
  (err) => {
    if (err) {
      console.log(
        `Eek, something went wrong when connecting to the database: ${err}`
      );
    } else {
      console.log('Yippee! Connected to the database.');
    }
  }
);

app.listen(3002, () =>
  console.log(`Server is running on port 3002! ${process.env.ATLAS_PASSWORD}`)
);
