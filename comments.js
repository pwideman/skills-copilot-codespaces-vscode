// Create web server
// 1. create a server object
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');
var http = require('http');
var url = require('url');
var nodemailer = require('nodemailer');
var bcrypt = require('bcrypt');
var saltRounds = 10;
var jwt = require('jsonwebtoken');
var secret = "mysecretsshhh";
var rand, mailOptions, host, link;
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(session({ secret: "Shh, its a secret!" }));
app.set('view engine', 'ejs');
app.set('views', './views');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});
// 2. define request response in the root URL (/)
app.get('/', function (req, res) {
    res.send('Hello World!');
});
// 3. start the server on port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
// 4. define GET method for the /comments URL
app.get('/comments', function (req, res) {
    res.send('GET HTTP method on comments resource');
});
// 5. define POST method for the /comments URL
app.post('/comments', function (req, res) {
    res.send('POST HTTP method on comments resource');
});
// 6. define PUT method for the /comments URL
app.put('/comments', function (req, res) {
    res.send('PUT HTTP method on comments resource');
});
// 7. define DELETE method for the /comments URL
app.delete('/comments', function (req, res) {
    res.send('DELETE HTTP method on comments resource');
});
// 8. define GET method for the /comments/:id URL
app.get('/comments/:id([0-9]{5})', function (req, res) {
    res.send('GET HTTP method on comments/id:' + req.params.id + ' resource');
});