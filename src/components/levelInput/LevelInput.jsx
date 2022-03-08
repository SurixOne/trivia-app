import React from "react";
import { levels } from "../../constants/constants";
import "./LevelInput.css";

function LevelInput({ level, handleLevelChange, isLoggedIn }) {
  return (
    <div>
      <label>
        {!isLoggedIn && <span>Level:</span>}
        <select
          spellCheck={false}
          className={"text-input" + (isLoggedIn ? " neon" : "")}
          value={level}
          onChange={handleLevelChange}
        >
          {Object.values(levels).map((lvl) => (
            <option key={lvl}>{lvl}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default LevelInput;
