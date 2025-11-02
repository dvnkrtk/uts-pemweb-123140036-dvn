import React from "react";

// Terima prop 'hasSearched' dari App.jsx
const DataTable = ({ books, onSelect, onAdd, hasSearched }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg mb-6">
      <table className="w-full text-sm text-left text-gray-800">
        <thead className="text-xs text-white uppercase bg-purple-600">
          <tr>
            <th scope="col" className="px-6 py-3">Cover</th>
            <th scope="col" className="px-6 py-3">Judul</th>
            <th scope="col" className="px-6 py-3">Penulis</th>
            <th scope="col" className="px-6 py-3">Tahun</th>
            <th scope="col" className="px-6 py-3">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book.id} className="bg-white border-b hover:bg-gray-50 align-middle">
                <td className="p-4">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-16 h-24 object-cover rounded-md" 
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">{book.title}</td>
                <td className="px-6 py-4">{book.author}</td>
                <td className="px-6 py-4">{book.year}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => onSelect(book)}
                      className="font-medium text-blue-600 hover:underline text-left"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => onAdd(book)}
                      className="font-medium text-green-600 hover:underline text-left"
                    >
                      Tambah 📘
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            // --- LOGIKA PESAN KOSONG DIPERBAIKI ---
            <tr>
              <td colSpan="5" className="text-center py-10 bg-white text-gray-500">
                {/* Jika sudah mencari (hasSearched) tapi buku kosong -> "Tidak ada hasil".
                  Jika belum mencari -> "Silakan lakukan pencarian".
                */}
                {hasSearched ? "Tidak ada buku ditemukan." : "Silakan lakukan pencarian."}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;