var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DATASOURCE = "ARosaje.sqlite"

let db = new sqlite3.Database(DATASOURCE, sqlite3.OPEN_READWRITE, err => {
    if (err) throw err
    console.log('database  started on '+ DATASOURCE)
});


module.exports = db