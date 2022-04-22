// getting dependencies
const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");

const app = express();

// getting the enviroment variables
const port = process.env.PORT || 9001;
mongo_uri = process.env.MONGO_URI;

// database connect and models
const connectDb = require('./connectDB/connectDB');
connectDb(mongo_uri);

// custom middlewares
app.use(bodyParser.json());
app.use(logger("tiny"));
app.use(express.json());
app.use(
     express.urlencoded({
          extended: false,
     })
);
app.use(cookieParser());
app.use(
     cors({
          origin: "*"
     })
);

//  Route paths
const registerRoute = require('./routes/register')
const loginRoute = require('./routes/login')
const dataRoute = require('./routes/userData')

// getting Routes
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/user', dataRoute);

// exporting the app.
module.exports = app;