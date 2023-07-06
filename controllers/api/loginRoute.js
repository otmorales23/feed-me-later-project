const express = require('express');
const mysql = require("mysql2");
const router = express.Router();
const { v4: uuidv4 } = require ('uuid');
const fs = require ("fs");

//const bcrypt = require("bcrypt");
const saltRounds = 10; 

const app = express();

//app.use(cookieParser());

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
  }));

  router.post('/', (req, res) => {
    const { username, password } = req.body;
  
    // Check if the username and password are valid.
    if (username === 'admin' && password === 'secret') {
      // Create a session for the user.
      req.session.user = { username };
  
      // Redirect the user to the home page.
      res.redirect('/');
    } else {
      // Redirect the user to the login page.
      res.redirect('/login.handlebars');
    }
  });

  router.get('/', (req, res) => {
    // Check if the user is authenticated.
    if (req.session.user) {
      // The user is authenticated.
      res.send('Welcome, ' + req.session.user.username);
    } else {
      // The user is not authenticated.
      res.redirect('/login');
    }
  });

  module.exports = router; 