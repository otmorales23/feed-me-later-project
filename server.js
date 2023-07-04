const express = require('express');
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'lavender',
    database: 'calendar_db'
  },
  console.log(`Connected to the calendar_db database.`)
);
// Database connection
db.connect(() =>{
  if(err){
    throw err;
  }
  console.log('You have connected to the database')
})


const PORT = process.env.port || 3001;
const app = express();

const addressRoute = require("./controllers/api/address");
const cityRoute = require("./controllers/api/city");
const nameRoute = require("./controllers/api/name");
const stateRoute = require("./controllers/api/state");
const loginRoutes = require("./controllers/api/loginRoute")

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/address", addressRoute);
app.use("/city", cityRoute);
app.use("/name", nameRoute);
app.use("/state", stateRoute);
app.use("/login", loginRoutes);


// Require handlebars
client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});

app.listen(PORT,()=>{
  console.log(`the server is running on https://localhost:${PORT}`)
});
