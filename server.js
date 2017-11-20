var express = require('express')
    , http = require('http');
//make sure you keep this order
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var cors = require('cors');



var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
port = process.env.PORT || 3100;

app.use(cors());

var path = require('path');
const api = require('./api/routes/api');
const ctrl = require('./api/routes/routes');

app.use('/api', api);
app.use('/ctrl', ctrl);

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'src/index.html'));
});

//SOKET

io.on('connection', function(socket){
    console.log('a user is connected');
    socket.on('add-comment', function (comment) {
        console.log('LOGBLOG');
        io.sockets.emit('new-comment', comment);
    });
});

server.listen(port);



console.log('product list RESTful API server startet on: ' + port);