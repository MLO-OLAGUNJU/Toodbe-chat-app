import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import React, { useEffect, useRef } from "react";
import useConversation from "../../zustand/useConversation";

const Messages = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="flex-1 px-4 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(6)].map((_, idx) => <MessageSkeleton />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">
          Start a chat with {selectedConversation.fullName}
        </p>
      )}
    </div>
  );
};

export default Messages;
