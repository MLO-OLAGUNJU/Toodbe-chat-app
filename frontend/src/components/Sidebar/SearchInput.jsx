import React from "react";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full focus:border-blue-600"
      />
      <button type="submit" className="btn btn-circle bg-blue-600 text-white">
        Icon
      </button>
    </form>
  );
};

export default SearchInput;
