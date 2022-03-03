import React from "react";
import { useSelector } from "react-redux";
import "./Greeting.css";

function Greeting() {
  const userName = useSelector((state) => state.user.name);
  return (
    <div className='greeting'>
      Hello <span className='greeting-name'>{userName}</span>!
    </div>
  );
}

export default Greeting;
