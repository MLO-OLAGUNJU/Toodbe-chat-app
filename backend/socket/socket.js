import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  //socket.on() is used to listen to the events, can be used both on client and on server side
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

export { app, io, server };
