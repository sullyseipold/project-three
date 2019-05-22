const express = require('express');

const graphqlHTTP = require('express-graphql');
var {
  buildSchema
} = require('graphql');


// GraphQL schema constructor
var schemastring = ('type Query { quoteOfTheDay: String random: Float! rollThreeDice: [Int] }');


var schema = buildSchema(schemastring);
// the root provides a resolver function for each API endpoint
var root = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Slow down' : 'Man';
  },
  random: () => {
    return Math.random();
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
  },
};





// sequelize db
var db = require("./models");
// const routes = require("./routes");
var syncOptions = {
  force: true
};

const app = express();
const PORT = process.env.PORT || 3001;


// // Define middleware here
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Add routes, both API and view
// app.use(routes);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));



if (process.env.NODE_ENV === "production") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function () {
  // Start the API server
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
    console.log('Running a GraphQL API server at localhost:3001/graphql');
  });
});

module.exports = app;