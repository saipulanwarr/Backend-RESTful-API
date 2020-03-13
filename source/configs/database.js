const {
    database
} = require('./mysql')
const mysql = require('mysql')

const connection = mysql.createConnection(database)

connection.connect((error) => {
    if (error) {
        console.log("DATABASE MAKYUR FAILED!")
    } else {
        console.log(`DATABASE MAKYUR CONNECTED!`)
    }
})

module.exports = connection