import React, { useState } from "react";
import { FriendsContext } from "./FriendsContext";

const FreindsContextProvider = ({ children }) => {
  const [extFriends, setExtFriends] = useState([]);
  const data = {
    extFriends,
    setExtFriends,
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FreindsContextProvider;
