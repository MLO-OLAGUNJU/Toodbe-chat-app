import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import React, { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import { FaLeftLong } from "react-icons/fa6";

const MessageContainer = ({ showChat, handleToggle }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

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
