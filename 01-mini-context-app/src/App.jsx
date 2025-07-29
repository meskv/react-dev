import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <h1 className="text-center">React with Context API</h1>
      <UserContextProvider>
        <div className="w-[40%] m-auto p-8 my-4">
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;
