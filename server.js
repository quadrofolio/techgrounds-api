const createError 		= require('http-errors');
const express 				= require('express');
const path 						= require('path');
const bodyParser 			= require('body-parser');
const logger 					= require('morgan');
const compression 		= require('compression');
const cors 						= require('cors')

const app 						= express();

// SETTING UP MIDDLEWARE:

// bypass cors so we can use XMLHttpRequest to call API
app.use(cors());
// enable gzip compression
app.use(compression());
// setup logger to stdOut
app.use(logger('dev'));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to express application." });
});

// GET routes from external routes file
require("./app/routes/customer.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
