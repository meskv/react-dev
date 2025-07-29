import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-2/3  m-auto py-4 flex flex-col gap-2 items-center justify-center bg-gray-50"
      >
        <h2 className="text-center my-4 text-2xl font-medium">Login</h2>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-gray-100 p-2"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-100 p-2"
        />

        <button className="w-2/3 bg-emerald-400 px-4 rounded text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
