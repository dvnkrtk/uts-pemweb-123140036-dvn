import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import DataTable from "./components/DataTable";
import DetailCard from "./components/DetailCard";

function App() {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [hasSearched, setHasSearched] = useState(false); // <-- TAMBAHAN

  const [readingList, setReadingList] = useState(() => {
    return JSON.parse(localStorage.getItem("readingList")) || [];
  });

  useEffect(() => {
    localStorage.setItem("readingList", JSON.stringify(readingList));
  }, [readingList]);

  // --- FUNGSI SEARCH DIPERBAIKI ---
  const handleSearch = async ({ query, subject }) => {
    setHasSearched(true); // <-- Tandai bahwa pencarian sudah dilakukan
    setIsLoading(true);
    setError(null);
    setFilteredBooks([]);

    // --- PERBAIKAN LOGIKA API ---
    // Open Library API tidak bisa gabung `q` dan `subject`.
    // Solusi: Gabungkan keduanya di parameter `q` pakai prefix "subject:".
    
    let queryString = "";
    if (query) {
      queryString += query; // Pencarian judul/penulis
    }
    if (subject) {
      // Tambahkan spasi jika query juga diisi
      if (query) queryString += " "; 
      queryString += `subject:${subject}`; // Filter subject
    }

    // Jika keduanya kosong (atau cuma spasi), jangan panggil API
    if (queryString.trim() === "") {
      setIsLoading(false);
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append("q", queryString.trim());
      params.append("limit", 20);

      const response = await fetch(
        `https://openlibrary.org/search.json?${params.toString()}`
      );
      
      if (!response.ok) throw new Error("Gagal mengambil data dari API.");
      
      const data = await response.json();
      if (data.docs.length === 0) {
        setFilteredBooks([]);
      } else {
        const transformedBooks = data.docs.map((doc) => ({
          id: doc.key,
          title: doc.title,
          author: doc.author_name ? doc.author_name.join(", ") : "N/A",
          year: doc.first_publish_year || "N/A",
          cover: doc.cover_i
            ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`
            : "https://via.placeholder.com/80x120?text=No+Cover",
          subject: doc.subject ? doc.subject.slice(0, 3).join(", ") : "N/A",
          description: doc.first_sentence ? doc.first_sentence[0] : "Deskripsi tidak tersedia."
        }));
        setFilteredBooks(transformedBooks);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const addToReadingList = (book) => {
    if (!readingList.some((b) => b.id === book.id)) {
      setReadingList([...readingList, book]);
    }
  };

  const removeFromReadingList = (id) => {
    setReadingList(readingList.filter((b) => b.id !== id));
  };

  return (
    <div className="App max-w-5xl mx-auto p-4 md:p-8">
      <Header />
      <SearchForm onSearch={handleSearch} />

      {isLoading && <p className="text-center text-lg text-gray-700 py-10">Mencari buku...</p>}
      {error && <p className="text-center text-red-600 font-semibold py-10">{error}</p>}

      <DataTable 
        books={filteredBooks} 
        onSelect={setSelectedBook} 
        onAdd={addToReadingList}
        hasSearched={hasSearched} // <-- Kirim status pencarian ke tabel
      />
      
      <DetailCard 
        book={selectedBook} 
        onClose={() => setSelectedBook(null)} 
      />

      {/* Reading List (tidak berubah) */}
      <section className="reading-list mt-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">📖 Reading List</h2>
        {readingList.length === 0 ? (
          <p className="text-gray-500">Tidak ada buku dalam daftar bacaan.</p>
        ) : (
          <ul className="space-y-4">
            {readingList.map((book) => (
              <li 
                key={book.id} 
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img src={book.cover} alt={book.title} className="w-10 h-14 object-cover rounded" />
                  <div>
                    <span className="font-semibold text-gray-900">{book.title}</span>
                    <p className="text-sm text-gray-600">{book.author}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromReadingList(book.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md text-sm font-medium hover:bg-red-600 transition"
                >
                  ❌ Hapus
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;