import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Conversations from "./Conversations";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = () => {
  const [search, setSearch] = useState("");

  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase)
    );
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered rounded-full focus:border-blue-600"
      />
      <button type="submit" className="btn btn-circle bg-blue-600 text-white">
        <FaSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
