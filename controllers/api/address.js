const express = require('express');
const mysql = require("mysql2");
const router = express.Router();
const { v4: uuidv4 } = require ('uuid');
const fs = require ("fs");

router.get('/', async (req, res) => {
    try {
        let Address = req.body.address;
        let sql = `SELECT location_address FROM business WHERE location_city = ${Address}`;
        let query = db.query(sql, Address, (err, result) => {
            if(err) throw err;
            console.log(result); 
            res.send(`you have selected ${Address}`)
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
            address: req.body.address,
            id: uuidv4(),
        };
        dbJson.push(newFeedback);
        await fs.writeFileSync("db/db.json", JSON.stringify(dbJson));

        let newAddress = newFeedback.address;
        let sql = `INSERT INTO business location_address VALUES ('${newAddress}')`;
        let query = db.query(sql, newAddress, (err, result) => {
            if(err) throw err;
            console.log(result); 
            res.send('the new address has been added to the database')
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
        let sql = `DELETE FROM business WHERE location_address = '${newData}'`;
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