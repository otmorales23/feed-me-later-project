const express = require('express');
const mysql = require("mysql2");
const router = express.Router();
const { v4: uuidv4 } = require ('uuid');
const fs = require ("fs");

router.get('/', async (req, res) => {
    try {
        let state = req.body.city;
        let sql = `SELECT location_state FROM business WHERE location_state = ${state}`;
        let query = db.query(sql, state, (err, result) => {
            if(err) throw err;
            console.log(result); 
            res.send('Here is the selected state')
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
            state: req.body.state,
            id: uuidv4(),
        };
        dbJson.push(newFeedback);
        await fs.writeFileSync("db/db.json", JSON.stringify(dbJson));

        let newState = newFeedback.state;
        let sql = `INSERT INTO business (location_state) VALUES ('${newState}')`;
        let query = db.query(sql, newState, (err, result) => {
            if(err) throw err;
            console.log(result); 
            res.send('the new state has been added to the database')
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
        fs.writeFileSync("db/db.json", JSON.stringify(newData));
        res.json("The Data you have entered has been deleted");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});

module.exports = router;