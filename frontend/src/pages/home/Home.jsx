import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  const handleToggle = () => {
    if (window.innerWidth <= 768) {
      setShowChat(!showChat);
    }
  };
  return (
    <>
      <div className="flex w-full h-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar showChat={showChat} handleToggle={handleToggle} />
        <MessageContainer showChat={showChat} handleToggle={handleToggle} />
      </div>
    </>
  );
};

export default Home;
