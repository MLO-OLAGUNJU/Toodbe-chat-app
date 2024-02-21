import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import React from "react";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log("messages:", messages);
  return <div className="flex-1 px-4 overflow-auto"></div>;
};

export default Messages;
