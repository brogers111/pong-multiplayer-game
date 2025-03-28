const http = require("http");
const api = require("./api");
const { Server } = require("socket.io");
const sockets = require("./sockets");

const server = http.createServer(api);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

sockets.listen(io);
