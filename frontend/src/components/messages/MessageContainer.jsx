import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import React from "react";

const MessageContainer = () => {
  const noChatSelected = true;

  return (
    <div className=" w-[100%] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-blue-600 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">Sebastian Oliver</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
