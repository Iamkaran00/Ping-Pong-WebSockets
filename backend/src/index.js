import { WebSocketServer } from "ws";
//creating websocket server which runs on followed port
const wss = new WebSocketServer({ port: 8080 });
//event handler 
//wss par jab bhi koi naya connection aaye toh take it here->
wss.on('connection', (socket) => {
    console.log("user connected");
    socket.on("message", e => {
        console.log(e.toString());
        if (e.toString() == "ping")
            socket.send("pong");
    });
});
//# sourceMappingURL=index.js.map