import React, {useEffect} from "react";
import './Chat.css'
// import querystring from 'query-string'
import { useLocation } from 'react-router-dom'

// import io from "socket.io-client"

const Chat = (props) => {
  const chatRoomURLParam = useLocation()

  useEffect(() => {
    if (chatRoomURLParam.state !== null) {
      const {name, room} = chatRoomURLParam.state
      console.log("name params is ", name);
      console.log("room params is ", room);
    }
    // const {name, room} = useParams()
    // const data = querystring.parse(location)
    // console.log("data value is ", data);
    // console.log("location search value is ", location);
  })

  return <div>Chat</div>;
};

export default Chat;
