import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import React, { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import { FaLeftLong } from "react-icons/fa6";
import { useSocketContext } from "../../context/SocketContext.jsx";

const MessageContainer = ({ showChat, handleToggle }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [messages, setMessages] = useState([]);
  const { socket } = useSocketContext();

  useEffect(() => {
    //cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  useEffect(() => {
    const lastMessageIsFromOtherUser = messages[messages.length - 1];
    if (lastMessageIsFromOtherUser) {
      socket.emit("markMessagesAsSeen", {
        conversationId: selectedConversation._id,
        userId: selectedConversation.userId,
      });
    }

    socket.on("messagesSeen", ({ conversationId }) => {
      if (selectedConversation._id === conversationId) {
        setMessages((prev) => {
          const updatedMesssages = prev.map((message) => {
            if (!message.seen) {
              return {
                ...message,
                seen: true,
              };
            }
            return message;
          });
          return updatedMesssages;
        });
      }
    });
  }, [socket, currentUser._id, messages, selectedConversation]);

  return (
    <div
      className={
        showChat
          ? "w-[100%] flex-col flex"
          : "w-[100%]  flex-col hidden lg:flex"
      }
    >
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-blue-600 px-4 flex items-center gap-3 py-2 mb-2">
            <FaLeftLong onClick={handleToggle} className="lg:hidden" />
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
