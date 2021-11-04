const mysql = require('mysql')
require("dotenv").config()


const db = mysql.createConnection({
host: "socialcrm.cyztke0fi8lx.ap-south-1.rds.amazonaws.com",
user: "admin",
password: process.env.PASS,
database:"SocialCRM" 
})

module.exports = db;