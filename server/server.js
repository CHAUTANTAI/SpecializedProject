//const express = require("express");
import express from 'express';
//import {connectDB, getDBTest} from './src/config/connectDB.js';
import mysql from "mysql";
const port = 8080;

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
});




app.get('/getdb', async (req, res) => {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "englishanytime",
    });
    connection.connect();
    await connection.query(
      'SELECT * FROM `user` ',
      (err, results, fields)=>{
        console.log(err);
        console.log(results); // results contains rows returned by server
        console.log(JSON.stringify(fields)); // fields contains extra meta data about results, if available
        res.send(JSON.stringify(fields))
      }
    );
  //getDBTest(connectDB());
  console.log(`OK`);
})
// app.get('/getdb', (req, res) => {
//   db.getDBTest(db.connectDB());
//   console.log(`OK`);
// })
app.listen(port, "192.168.0.105", () =>{
  console.log(`Server is running at PORT:${port}`);
})
