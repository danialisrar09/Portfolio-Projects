const io = require('socket.io')(3000)

const user = {};

io.on('connection', Socket=>{
    Socket.on('user joined', name=>{
        user[Socket.id] = name;
        Socket.broadcast.emit('user joined', name);
    })

    Socket.on('send', message=>{
        Socket.broadcast.emit('receive', {message: message, name: user[Socket.id]});
        
    })
})