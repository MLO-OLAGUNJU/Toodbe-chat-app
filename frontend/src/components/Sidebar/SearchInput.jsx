import React from "react";
import { FaSearch } from "react-icons/fa";
import Conversations from "./Conversations";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full focus:border-blue-600"
      />
      <button type="submit" className="btn btn-circle bg-blue-600 text-white">
        <FaSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
