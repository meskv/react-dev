import React from "react";

const PasswordDisplay = ({ passwordRef, password, onCopy }) => {
  return (
    <div className="mx-auto flex flex-row gap-4 p-4 my-2 overflow-hidden">
      <label className="flex flex-row gap-2 w-full bg-gray-700 p-2">
        <input
          type="text"
          readOnly
          ref={passwordRef}
          value={password}
          placeholder="password"
          className="bg-gray-600 p-2 text-gray-100 w-full rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          onClick={onCopy}
          className="bg-emerald-700 hover:bg-emerald-600 text-white p-2 py-2 rounded cursor-pointer"
        >
          Copy
        </button>
      </label>
    </div>
  );
};

export default PasswordDisplay;
