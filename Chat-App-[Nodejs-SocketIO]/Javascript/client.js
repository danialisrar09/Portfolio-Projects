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
const naam = prompt("Enter your name: ");
socket.emit('new-user-joined', naam);

socket.on('User-joined', data =>{
    append(`${naam} joined the chat`, `right`)
})