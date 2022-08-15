const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tesst"
});
con.connect();

const express = require('express');
const app = express();

app.get('/list', function(req,res){
    con.query('select * from user', function(error,results){
        if (error) throw error;
        console.log(results);
    });
});

app.listen(89)

