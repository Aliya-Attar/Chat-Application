const socket=io();
socket.on("connect", () => {
console.log("connected to server");
});
function sendMessage(){
console.log("Button clicked");
let input=document.getElementById("messageInput");
let message=input.value;
console.log(message);
socket.emit("chat message",message);
input.value="";
}
socket.on("chat message",function(msg){
let li=document.createElement("li");
li.textContent=msg;
document.getElementById("messages").appendChild(li);
});