var express = require('express'),
    app = express(),
    //cors = require('cors')
    port = process.env.PORT || 3100;
    //app.use(cors());

var path = require('path');
const api = require('./api/routes/api');
const ctrl = require('./api/routes/routes');

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);
app.use('/ctrl', ctrl);

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'src/index.html'));
});



app.listen(port);

console.log('product list RESTful API server startet on: ' + port);