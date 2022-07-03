
const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");
const socket = new WebSocket(`ws://${window.location.host}`);


socket.addEventListener("open", () => {
    console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
    // const message = event.data;
    // const { data: message } = event; 
    console.log("New message: ", message.data);
    // client to server
    socket.send('Hello from browser.');
});

socket.addEventListener("close", () => {
    console.log("Disconnected from Server ❌");

});

function handleSubmit(event){
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(input.value);
    input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);