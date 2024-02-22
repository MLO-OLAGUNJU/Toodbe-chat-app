import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <main className="leftside">
      <div className="border-r border-blue-600 p-4 flex flex-col">
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />

        <LogoutButton />
      </div>
    </main>
  );
};

export default Sidebar;
