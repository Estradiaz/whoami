const express = require("express");
const app = express();

app.get("/", function(req, res){
    let ip = req.headers['x-forwarded-for'].split(",")[0] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    console.log(ip);
    let obj = new whoami(req.headers.host, req.headers["accept-language"], req.headers["user-agent"])
    res.send(JSON.stringify(obj));
});

function whoami(ip, language, software){

    this.ip = ip;
    
    this.language = language.split(",")[0];
    this.software = software.split("(")[1].split(")")[0];
};

let server = app.listen(process.env.port || 3000, function(port){
    console.log("connected on Port: ", port);
});