import React, { useState, useEffect } from "react";
import "./Chat.css";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import { InfoBar, Messages, Input } from '../index'
// import Messages from "../Messages/Messages";

let socket;

const Chat = (props) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([])

  const chatRoomURLParam = useLocation();
  const ENDPOINT = "http://localhost:3002";

  useEffect(() => {
    if (chatRoomURLParam.state !== null) {
      const { name, room } = chatRoomURLParam.state;

      socket = io(ENDPOINT);

      setName(name);
      setRoom(room);

      socket.emit("join", { name, room }, () => {});

      // unmounting the scoket connection to emit the disconnect event
      return () => {
        socket.emit("disconnect")
        socket.off()
      }
    }
  }, [ENDPOINT, chatRoomURLParam.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message])
    })
  }, [messages])

  const sendMessage = (e) => {
    e.preventDefault()
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""))
    }
  }

  console.log("message is ", message);
  console.log("messagesssssss is ", messages);

  return (
    <>
      <div className="outerContainer">
        <div className="container">
        <InfoBar room={room} />
        <Messages />
        <Input message={message} sendMessage={sendMessage} setMessage={setMessage} />
          
        </div>
      </div>
    </>
  );
};

export default Chat;
