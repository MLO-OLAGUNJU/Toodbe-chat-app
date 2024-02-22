import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = ({ showChat, handleToggle }) => {
  return (
    <>
      {!showChat ? (
        <div className="leftside border-r border-blue-600 p-4 flex flex-col">
          <SearchInput />
          <div className="divider px-3"></div>
          <Conversations showChat={showChat} handleToggle={handleToggle} />
          <LogoutButton />
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
