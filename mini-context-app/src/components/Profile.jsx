import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext)

  if (!user) return <div className="my-4 text-center">Please Login</div>
  
  return <div className="my-4 text-center">Welcome {user.username}</div>
}

export default Profile;
