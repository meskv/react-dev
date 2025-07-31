import React from "react";

const PasswordControls = ({
  length,
  setLength,
  numberAllowed,
  setNumberAllowed,
  charAllowed,
  setCharAllowed,
}) => {
  return (
    <div className="flex flex-row gap-x-4 my-4 items-center justify-center flex-wrap">
      <label>
        <input
          type="range"
          min="6"
          max="100"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />{" "}
        Length: {length}
      </label>
      <label>
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={(e) => setNumberAllowed(e.target.checked)}
        />{" "}
        Num Allowed
      </label>
      <label>
        <input
          type="checkbox"
          checked={charAllowed}
          onChange={(e) => setCharAllowed(e.target.checked)}
        />{" "}
        Char Allowed
      </label>
    </div>
  );
};

export default PasswordControls;
