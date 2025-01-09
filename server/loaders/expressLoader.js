const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { ExtractJwt } = require("passport-jwt");
require("dotenv").config();
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { cookieExtractor } = require("../services/common");
const sessionConfig = require("../Config/session");
const passport = require("passport");


const expressLoader = (app) => {
  var opts = {};
  opts.jwtFromRequest = cookieExtractor;
  opts.secretOrKey = process.env.JWT_SECRET_KEY;

  const corsOptions = {
    origin: "http://localhost:3000",  // Frontend origin (allow the React app)
    credentials: true,  // Allow cookies to be sent
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization", // Allow necessary headers
    methods: "GET, POST, PUT, DELETE", // Allowed HTTP methods
  };
  
  app.use(cors(corsOptions)); 
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  sessionConfig(app);
  app.use(passport.initialize());
  app.use(passport.session());

  console.log("Express middleware initialized");
};

module.exports = expressLoader;
