const db = require("../models/db.js")
const md5 = require('md5')
//GET '/user'
const getAllUser = (req, res, next) => {
    var sql = "select * from User"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "users":rows
        })
      });
};

//POST '/user'
const newUser = (req, res, next) => {
    const requestBody = req.body;
    console.log("url "+req.url);
    console.log("prenom "+requestBody.prenom);
    db.run('INSERT INTO User (prenom, nom, email, mdp, telephone) VALUES (?,?,?,?,?)',
        [requestBody.prenom, requestBody.nom,requestBody.email, md5(requestBody.mdp),requestBody.telephone],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json({
                "id": this.lastID
            })
        });
};

//export controller functions
module.exports = {
    getAllUser, 
    newUser
};