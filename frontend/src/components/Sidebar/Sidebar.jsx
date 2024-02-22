/* import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="border-r border-blue-600 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />

      <LogoutButton />
    </div>
  );
};

export default Sidebar;
 */

import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = ({ show }) => {
  return (
    <div
      className={`border-r border-blue-600 p-4 flex flex-col ${
        !show && "hide-on-mobile"
      }`}
    >
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />

      <LogoutButton />
    </div>
  );
};

export default Sidebar;
