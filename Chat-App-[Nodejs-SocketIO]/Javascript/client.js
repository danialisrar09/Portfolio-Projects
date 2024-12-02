const socket = io('http://localhost:8000')

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
const Name = prompt("Enter your name: ");
socket.emit('new-user-joined', Name);

socket.on('User-joined', data =>{
    append(`${Name} joined the chat`, `right`)
})