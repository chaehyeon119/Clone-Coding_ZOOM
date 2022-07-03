import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

// http

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home")); //app.get은 어떻게 처리할 건지 어떤 주소가 들어오면 함수를 호출해서 처리하겠다. home은 home.pug
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log('Listening on http://localhost:3000');

const server = http.createServer(app);
const wss = new WebSocket.Server({ server }); // { server : server } 키 벨류 값이 값을 때 왼쪽처럼 줄여서 쓸 수 있음


const sockets = []; //sockets라는 배열 만들기

wss.on("connection", (socket) => {
    sockets.push(socket); //socket 배열에 생성된 소켓 추가
    console.log("Connected to Browser ✅");
    socket.on("close", () => console.log("Disconnected from the Browser ❌ "));
    // message 이벤트가 발생하면 실행하라
    socket.on("message", (message) => {
        sockets.forEach(aSocket => aSocket.send(`${message}`));
    });
})

// webSocketSever.on("connected", (socket) =>{
//     console.log("connection maded:", socket);
// })

server.listen(3000, handleListen);

