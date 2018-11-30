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


app.get('/:id', function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
        if (err) throw err;
        let users = JSON.parse(data);
        let user = users["user" + req.params.id]
        console.log("User Info by id:" + JSON.stringify(user));
        res.send(JSON.stringify(user));
    });
})

app.delete('/deleteUser', function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
        data = JSON.parse(data);
        delete.data["user" + 2];
        console.log("Delete user" + JSON.stringify(data));
        res.send(JSON.stringify(data));
    });
})