var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DATASOURCE = "arosaje-bd.sqlite"

let db = new sqlite3.Database(DATASOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the arosaje-bd database.')
        db.run('CREATE TABLE "User" (\
            "id_user" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\
            "prenom" TEXT NOT NULL,\
            "nom" TEXT NOT NULL,\
            "email" TEXT NOT NULL,\
            "telephone" TEXT NOT NULL,\
            "Numero_rue" TEXT,\
            "code_postale" INTEGER,\
            "ville" TEXT,\
            "mdp" TEXT NOT NULL,\
            "role" INTEGER NOT NULL DEFAULT 1,\
            "flag" INTEGER NOT NULL DEFAULT 1\
        );',(err) => {
            if (err) {
                console.log("Table already exists.");
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO User (prenom, nom, email, mdp, telephone) VALUES (?,?,?,?,?)';
                db.run(insert, ["John", "Smith", "john01@gmail.com",md5("john@123"), "07253678"]);
                db.run(insert, ["Brad", "Pitt", "brad@gmail.com",md5("brad@123"), "06253678"]);
                db.run(insert, ["Will", "Smith", "will@gmail.com",md5("will@123"), "07853678"]);
                db.run(insert, ["Angelina", "Jolie", "jolie@gmail.com",md5("jolie@123"), "07253678"]);
            }
        });
    }
});


module.exports = db