const socket  = io('http://localhost:3000');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('inp');
const messageContainer = document.getElementById('message-container');    

const name = prompt('What is your name ?');
appendMessage('you joined ');
socket.emit('new-user' ,name);

socket.on('chat-message' ,data =>{
    appendMessage(data);
});

socket.on('user-connected' ,name =>{
    appendMessage(`${name} connected`);
});
messageForm.addEventListener('submit' , e =>{
    e.preventDefault();

    const message = messageInput.value
    socket.emit('send-chat-message' , message);
    messageInput.value = "";
})

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message ;
    messageElement.classList.add('message-display');
    messageContainer.append(messageElement);
  } 