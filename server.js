var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    bodyParser = require('body-parser'),
    controller = require('./controller'),
    server   = require('http').Server(app),
    io       = require('socket.io')(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req,res,next){
    req.io = io;
    next();
});
io.on("connection", (socket) => {
    console.log(socket.id)
  });

var routes = require('./routes');
routes(app);

server.listen(port);
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);