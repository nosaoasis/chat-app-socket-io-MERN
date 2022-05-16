import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import './Join.css'

const Join = () => {
  const [name, setName] = useState("")
  const [room, setRoom] = useState("")

  const navigate = useNavigate()

  const handleSignIn = () => {
    // navigate('/chat', {state: {name, room}})
    navigate(`/chat?name=${name}&room=${room}`, {state: {name, room}})
  }

  return (
    <>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <div>
            <input 
              placeholder="Name" 
              className="joinInput" 
              type="text" 
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <input 
              placeholder="Room" 
              className="joinInput" 
              type="text" 
              value={room}
              onChange={e => setRoom(e.target.value)}
            />
          </div>
          {/* <Link 
            to={`/chat?name=${name}&room=${room}`} 
            disabled={!name || !room}
            onClick={handleSignIn}
            onClick={e => (!name || !room) ? e.preventDefault() : null}
          > */}
            <button 
              className="button mt-20" 
              type="submit" 
              disabled={!name || !room}
              onClick={handleSignIn}
              >
                Sign In
              </button>
          {/* </Link> */}
        </div>
      </div>
    </>
    );
};

export default Join;
