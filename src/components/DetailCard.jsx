import React from "react";

const DetailCard = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="detail-card bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl"
        >
          &times;
        </button>
        
        <div className="flex flex-col md:flex-row gap-6">
          <img 
            src={book.cover} 
            alt={book.title} 
            className="w-36 h-52 object-cover rounded-md shadow-md mx-auto md:mx-0" 
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">{book.title}</h2>
            <p className="text-lg text-gray-700 mb-1">
              <strong>Penulis:</strong> {book.author}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Tahun:</strong> {book.year}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Kategori:</strong> {book.subject}
            </p>
          </div>
        </div>
        
        <p className="mt-4 text-gray-700">{book.description}</p>
      </div>
    </div>
  );
};

export default DetailCard;