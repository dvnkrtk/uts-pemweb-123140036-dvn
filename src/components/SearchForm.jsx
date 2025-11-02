import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState(""); // Input untuk Fitur 5

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, subject });
  };

  return (
    <form
      className="flex flex-col md:flex-row gap-3 mb-6 p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Cari judul atau penulis..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
      />
      <input
        type="text"
        placeholder="Filter berdasarkan subjek (e.g., programming)"
        value={subject}
onChange={(e) => setSubject(e.target.value)}
        className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
      >
        🔍 Cari
      </button>
    </form>
  );
};

export default SearchForm;