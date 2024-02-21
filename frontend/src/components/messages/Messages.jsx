import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import React from "react";

const Messages = () => {
  const { messages, loading } = useGetMessagesMessages();
  console.log(messages);
  return (
    <div className="flex-1 px-4 overflow-auto">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
