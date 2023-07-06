const express = require('express');
const mysql = require("mysql2");
const router = express.Router();
const db = require('../../config/connection');


// from form selection, submit a POST request to this endpoint: 
// <form action="/location" method="POST">....</form>
// Name: <input name="name"/>
// <input type="hidden" name="state" value="New York"/>

// function onClick() {
//   fetch('/location', {
//     method: 'POST',
//     body: {
//       name: 'New York',
//       address: '123 wall street',
//       state: 'NY State',
//       city: 'NYC'
//     }
//   })
// }

// <div onclick="onClick(data)">...</div>

  router.post('/', (req, res) => {
    const { name, address, city, state } = req.body;

    try {
        let sql = `INSERT INTO business (locationName,locationAddress, locationCity, locationState ) VALUES ('${address}', '${city}', '${name}', '${state}')`;
        db.query(sql, newAddress, (err, result) => {
            if(err) throw err;
            
            console.log('Saved result ', result); 
            res.status(201).json('The selected location has been saved to the database')
        });
        
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }

    
    
  });

  router.get('/', (req, res) => {

    // // Check if the user is authenticated.
    // if (req.session.user) {
    //   // The user is authenticated.
    //   res.send('Welcome, ' + req.session.user.username);
    // } else {
    //   // The user is not authenticated.
    //   res.redirect('/login');
    // }
    //return res.redirect('/homepage.handlebars');
    return res.send('<h2>Location API works</h2>')
  });

  module.exports = router; 