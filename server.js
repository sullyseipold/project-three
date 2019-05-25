const express = require("express");

// var sequelize = require('sequelize');
var db = require("./models");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();


// var request = require("request");

// var options = { method: 'GET',
//   url: 'http://localhost:3001/',
//   headers: { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFqYzRNelV3UVRCQlJUSTJPVEF3TXpVM1JUSTNOME5CUlVWR01EZEJOREJEUVVNeE4wVkVNQSJ9.eyJpc3MiOiJodHRwczovL2Rldi1iMjNsZXlnYi5hdXRoMC5jb20vIiwic3ViIjoiRFRJRjd6OTI5VlcxRTZqWnhxcDdrYmNUNlNCcHMyRmFAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkiLCJpYXQiOjE1NTg3NTAzMTYsImV4cCI6MTU1ODgzNjcxNiwiYXpwIjoiRFRJRjd6OTI5VlcxRTZqWnhxcDdrYmNUNlNCcHMyRmEiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.FlhRZiYspfA-FfkhRjRjbVB-v8cszb2I0p27I1SqBU37wG9EO4LPq9heA7nDuM9tLjU_dvJnnQbR3-eVO5_YF2hSOwJAZL4NTG2v7JVvv5X8ncNxHizAQJJ6wq177r5VMGxKpMwQPwWTXdUO08TCCmWDaWC9AESMocLVbPD5_3AdiCrBe_UWKQ4rLDg3l1Xr0nhCwsTDTaL__JvtBoFoGZSM4Qp26aDAHAds4UfQIq5wcYS4edUlyNf_BlxDwv_Y5j1r9ZM2xaAxXFas_enmBKWx5vQNvF_2shRwFspYsnjnmys5QsYktiHvIAp1zLOJRCRukfxUvoj4-NiXCFSADQ' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });
if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file'
}

app.use(cors());
app.use(morgan('API Request (port 3001): :method :url :status :response-time ms - :res[content-length]'));

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

const checkScopes = jwtAuthz([ 'read:messages' ]);

app.get('/api/public', function(req, res) {
  res.json({ message: "Hello from a public endpoint! You don't need to be authenticated to see this." });
});

app.get('/api/private', checkJwt, checkScopes, function(req, res) {
  res.json({ message: "Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this." });
});



// Define middleware here
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

var syncOptions = {
  force: true
};

// If running on heroku, set syncOptions.force to true
// if (process.env.NODE_ENV === "production") {
//   syncOptions.force = true;
// }

db.sequelize.sync(syncOptions).then(function () {

  // Start the API server
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

module.exports = app;