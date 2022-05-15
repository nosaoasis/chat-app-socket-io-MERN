require("dotenv").config()
const express = require("express")
const socketio = require("socket.io")
const http = require("http")
const PORT = process.env.PORT
const app = express()
const cors = require("cors")


app.use(cors())
app.use(express.json())

const home = require('./routes/home')

app.use("/api/v1/", home)


const server = http.createServer(app)
const io = socketio(server)

io.on("connection", (socket) => {
  console.log("we have a new connection with an id of ", socket.id);

  socket.on("disconnect", () => {
    console.log("user with socket connection id ", socket.id, "has been disconnected");
  })
})

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})


