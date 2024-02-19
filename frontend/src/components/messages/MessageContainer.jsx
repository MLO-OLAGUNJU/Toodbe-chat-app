import React from "react";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className=" w-[100%] flex flex-col">
      <>
        {/* Header */}
        <div className="bg-blue-600 px-4 py-2 mb-2">
          <span className="label-text">To:</span>{" "}
          <span className="text-gray-900 font-bold">Sebastian Oliver</span>
        </div>

        <Messages />
        {/* <MessageInput/> */}
      </>
    </div>
  );
};

export default MessageContainer;
