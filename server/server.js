require("dotenv").config()
const express = require("express")
const socketio = require("socket.io")
const http = require("http")
const PORT = process.env.PORT
const app = express()
const cors = require("cors")

const {users, addUser, removeUser, getUser, getUserInRoom} = require('./helpers/users')


app.use(cors())
app.use(express.json())

const home = require('./routes/home')

app.use("/api/v1/", home)


const server = http.createServer(app)
const io = socketio(server, {
  cors : {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

io.on("connection", (socket) => {
  // console.log("we have a new connection with an id of ", socket.id);

  socket.on("join", (data, callback) => {
    const {name, room} = data
    const {error, user} = addUser({id: socket.id, name, room})

    if (error) return callback(error)

    socket.emit("message", {"user": "admin", "text": `${name}, welcome to the ${room} room`})
    socket.broadcast.to(room).emit("message", {"user": "admin", "text": `${name} has joined!`})

    socket.join(room)
    callback()
    // console.log("received client data ", data);
    // socket.to(data.room).emit("receive_message", data)
  })

  socket.on("sendMessage", (data, callback) => {
    const {name, room} = getUser(socket.id)

    io.to(room).emit("message", {user: name, text: data})
    callback()
  })

  socket.on("disconnect", () => {
    console.log("user with socket connection id ", socket.id, "has been disconnected");
  })
})

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})


