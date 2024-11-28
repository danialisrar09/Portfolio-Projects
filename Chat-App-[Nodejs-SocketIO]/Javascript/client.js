const socket = io("http://localhost:8000")

const form = document.getElementById('send-container');
const msgInput = document.getElementById('msgInput');
const msgContainer = document.querySelector('.container');

const Name = prompt("Enter your name: ");
socket.emit('new-user-joined', Name);