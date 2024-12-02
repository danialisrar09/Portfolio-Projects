//Node Server  which will handle socket io connection 
const io = require('socket.io')(3000)

const user = {};

io.on('connection', socket => {
    console.log('a user connected');
    //Agar new user join event ayega to ye hoga.
    socket.on('new-user-joined', name =>{
        console.log("New user", name);
        user[socket.id] = name;
        socket.broadcast.emit('user-joined', name)
    });

    //Agar koi user msg send karega to baki logon ke pass broadcast hojayega
    socket.on('send', message =>{
        socket.broadcast.emit('recieve', {message: message, name: user[socket.id]})
    });
})

server.listen(3000, () => {
    console.log('listening on *:3000');
});