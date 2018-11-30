const express = require('express');
const app = express();
const fs = require("fs");


let user = {
    "user4": {
        "name": "mahesh",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    },
}


let server = app.listen(8081, function() {
    let host = server.address().address
    let port = server.address().port
    console.log("Launch API restful with the following URI http://%s:%s", host, port)
})

/*
 *
 * method >listUsers
 *
 */

app.get('/listUsers', function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
        console.log(data);
        res.send(data);
    });
})

app.post('/addUser', function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.send(JSON.stringify(data));
    });
})