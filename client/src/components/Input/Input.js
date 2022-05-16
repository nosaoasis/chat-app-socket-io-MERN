import React from "react";
import "./Input.css";

const Input = (props) => {
  const { message, sendMessage, setMessage } = props;
  return (
    <>
      <form className="form" onSubmit={e => e.preventDefault()}>
        <input
          className="input"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
        <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
      </form>
    </>
  );
};

export default Input;
