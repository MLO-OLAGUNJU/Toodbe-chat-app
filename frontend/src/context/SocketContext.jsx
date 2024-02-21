import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {}, []);
  return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>;
};
