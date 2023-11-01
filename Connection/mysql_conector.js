const mysql = require('mysql');

const db = mysql.createConnection(
    {
        host:'localhost',
        port:3306,
        user:'root',
        password:'Saravi18',
        database:'db_agenda'
    }
)

module.exports=db;