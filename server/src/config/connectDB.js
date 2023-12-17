import express from "express";
import mysql from "mysql2";

const connectDB = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "id21389020_taihoccodeko02",
    password: "13162002Ko.",
    database: "id21389020_db",
  });
  return connection;
};
// simple query
const getDBTest = async (connection) => {
    await connection.query(
        'SELECT * FROM `test` ',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
}

export {connectDB, getDBTest}