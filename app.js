// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const cors = require('cors');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');
let flash = require('connect-flash');

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const projectName = 'fitness-app-api-clone';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;



app.use(
    session({
      secret: '123secret',
      resave: true,
      saveUninitialized: true,
      cookie: {
        maxAge: 600000
      }, // ADDED code below !!!
      store: MongoStore.create({
        mongoUrl: "mongodb://localhost/fitness-app-api-clone"
      })
    })
  );
  
  app.use(flash());
 

  app.use(function (req, res, next) {
    res.locals.theUser = req.session.currentlyLoggedIn;
    res.locals.errorMessage = req.flash("error");
    res.locals.successMessage = req.flash("success");
    next();
  })








// Routes
const indexRoutes = require("./routes/index.routes");
const authRoutes = require("./routes/authroutes");
const entryRoutes = require("./routes/entry.routes");
const exerciseRoutes = require("./routes/exercise.routes");
const nutritionRoutes = require("./routes/nutrition.routes");

app.use("/api", indexRoutes);
app.use("/auth", authRoutes);
app.use("/entry", entryRoutes)
app.use("/exercise", exerciseRoutes);
app.use("/nutrition", nutritionRoutes);


// To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
