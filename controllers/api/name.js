const express = require('express');
const mysql = require("mysql2");
const router = express.Router();
const { v4: uuidv4 } = require ('uuid');
const fs = require ("fs");

router.get('/', async (req, res) => {
    try {
        let name = req.body.name;
        let sql = `SELECT business_name FROM business WHERE business_name = ${name}`;
        let query = db.query(sql, city, (err, result) => {
            if(err) throw err;
            console.log(result); 
            res.send(`you have selected ${name}`)
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
            name: req.body.name,
            id: uuidv4(),
        };
        dbJson.push(newFeedback);
        await fs.writeFileSync("db/db.json", JSON.stringify(dbJson));

        let newName = newFeedback.name;
        let sql = `INSERT INTO business business_name VALUES ('${newName}')`;
        let query = db.query(sql, newName, (err, result) => {
            if(err) throw err;
            console.log(result); 
            res.send('the new name has been added to the database')
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
        let sql = `DELETE FROM business WHERE business_name = '${newData}'`;
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