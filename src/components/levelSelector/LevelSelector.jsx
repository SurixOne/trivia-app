import React from "react";
import "./LevelSelector.css";

function LevelSelector({ level, handleLevelChange, isLoggedIn }) {
  const levels = [
    "Beginner",
    "Intermediate",
    "Expert",
    "▁▂▄▅▆█ godlike █▆▅▄▂▁",
  ];
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
          {levels.map((lvl) => (
            <option key={lvl}>{lvl}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default LevelSelector;
