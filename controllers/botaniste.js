const db = require("../models/db.js")
const md5 = require('md5')
//GET '/botaniste'
const getAllBotaniste = (req, res, next)=>{
    //res.send('Hello word')
    try{
            db.all('SELECT * FROM botaniste', [], (err, data) => {  ///////////////////db.get() db.all() db.each()
                console.log(data)
                console.log(data.length)
                if(err) return res.json({status:1000, success:false, error:err})
              if(data.length<1) return res.json({status:3000, success:false, error:err})

              let name = data.name;
                          /// data.name ne fonctionne pas (a resoudre)
    
              //return res.json({status:200, data:data, success:true})
              //return res.json({data:data})
              return res.send(JSON.stringify(data))
    })
    }catch(error){
              return res.json({status:4000, success:false, error:error})
    }
};

//POST '/botaniste'
const newBotaniste = (req, res, next) => {
    const requestBody = req.body;
    console.log("url "+req.url);
    console.log("prenom "+requestBody.prenom);
    db.run('INSERT INTO Botaniste (firtname, lastname, geolocalisation, plante) VALUES (?,?,?,?)',
        [requestBody.firtname, requestBody.lastname,requestBody.geolocalisation, requestBody.plante],
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
    getAllBotaniste, 
    newBotaniste
};