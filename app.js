const express = require('express');
var app = express();
const server = require('http').createServer(app);
 var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
const db_connect = require('./db_connect.js');
let con = db_connect.con;

// http.createServer(function(request, response){
//     response.writeHead(200, {
//         'Content-Type' : 'text/plain'
//     });
//     response.write('Hello!')
//     response.end();
//     console.log('node server running at port 1337');
// }).listen(1337);

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

app.get("/", function(req, res){
    console.log('Server connected!');
    res.sendFile(__dirname+ '/index.html')
});


app.post("/inbox", function(req, res){
    console.log('body: ', req.body);
    console.log('query: ', req.query);
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected to DataBase!");
        var sql = "INSERT INTO `messages` (`name`,`number`,`mail`,`message`) VALUES ('" + req.body.name + "', '" + req.body.num + "' ,  '" + req.body.email + "',  '" + req.body.message + "')";
         con.query(sql, function (err, result) {
        if (err) throw err;
      
      });
      });
    res.sendFile(__dirname+ '/index.html')
});

server.listen(1337)