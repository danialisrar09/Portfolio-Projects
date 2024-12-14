const socket = io('http://localhost:3000');

const form = document.getElementById('send-container');
const msgInput = document.getElementById('msgInput');
const msgContainer = document.querySelector(".container");

const append = (message, position)=>{
    const messageElement = document.createElement("div");
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add('position');
    msgContainer.append(messageElement)
}
const name = prompt("Enter your name to join: ");
socket.emit('new-user-joined');

socket.on('User-joined', name =>{
    append(`${name} joined the chat`, `right`)
})