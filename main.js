const express = require("express");
const routeUser = require('./routes/user');
const routesBotaniste = require('./routes/botaniste');
const droutes = require('./routes/default');

const app = express();
app.use(express.json());
app.use('/', routeUser);
app.use('/', routesBotaniste);
app.use('/', droutes);
const LISTEN_PORT = 3000;
app.listen(LISTEN_PORT,()=> {
    console.log("Server is listening on port " + LISTEN_PORT);
});