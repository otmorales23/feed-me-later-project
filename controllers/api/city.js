const express = require('express');
const mysql = require("mysql2");
const router = express.Router();
const { v4: uuidv4 } = require ('uuid');
const fs = require ("fs");


// have to figure out how to get the city name input in the get 
router.get('/', async (req, res) => {
    try {
        let city = req.body.city;
        let sql = `SELECT location_city FROM business WHERE location_city = ${city}`;
        let query = db.query(sql, city, (err, result) => {
            if(err) throw err;
            console.log(result); 
            res.send('Here is the selected city')
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});


router.post('/', async (req, res) => {
    try {
        const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
        const newFeedback = {
            city: req.body.city,
            id: uuidv4(),
        };
        dbJson.push(newFeedback);
        await fs.writeFileSync("db/db.json", JSON.stringify(dbJson));

        let newCity = newFeedback.city;
        let sql = `INSERT INTO business location_city VALUES ('${newCity}')`;
        let query = db.query(sql, newCity, (err, result) => {
            if(err) throw err;
            console.log(result); 
            res.send('the new city has been added to the database')
        });
        
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});


router.delete('/', (req, res) => {
    try {
        let data = fs.readFileSync("db/db.json", "utf8");
        const dataJson = JSON.parse(data);
        const newData = dataJson.filter((Data) => {
            return Data.id !== req.params.id;
        });
        let sql = `DELETE FROM business WHERE location_city = '${newData}'`;
        let query = db.query(sql, newData, (err, result) => {
            if(err) throw err;
            console.log(result); 
            res.send('the information has been removed from the database')
        });
        fs.writeFileSync("db/db.json", JSON.stringify(newData));
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});

module.exports = router;