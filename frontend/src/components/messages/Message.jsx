import React from "react";
import useAuthContext from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassname = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const bubbleBgColor = fromMe ? "bg-blue-600" : "";
  return (
    <div className={`chat ${chatClassname}`}>
      <div className={`chat-image avatar`}>
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="" />
        </div>
      </div>

      <div className={`chat-bubble text-white bg-blue-600 ${bubbleBgColor}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
};

export default Message;
