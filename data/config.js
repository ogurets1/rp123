const mysql = require('mysql');

const db = mysql.createConnection({
    host: '127.0.0.1', 
    user: 'root', 
    password: '', 
    database: 'mydatabase',
    port: 3307 
});

db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("MYSQL Connected...")
    }
})
module.exports = db;
