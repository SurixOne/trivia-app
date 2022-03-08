import React from "react";
import { useSelector } from "react-redux";
import { nameSelector } from "../../store/user";
import "./Greeting.css";

function Greeting() {
  const userName = useSelector(nameSelector);
  return (
    <div className='greeting'>
      Hello <span className='greeting-name'>{userName}</span>!
    </div>
  );
}

export default Greeting;
