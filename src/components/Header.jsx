import React from "react";

const Header = () => (
  <header className="bg-linear-to-r from-indigo-600 to-purple-700 ...">
    <h1 className="text-4xl font-extrabold mb-3 flex justify-center items-center gap-2">
      📚 Baca Nusantara
    </h1>
    <p className="max-w-3xl mx-auto text-lg leading-relaxed">
      Aplikasi perpustakaan digital dengan pencarian dari Open Library API, 
      filter, dan daftar baca pribadi (reading list) yang disimpan di LocalStorage.
    </p>
  </header>
);

export default Header;