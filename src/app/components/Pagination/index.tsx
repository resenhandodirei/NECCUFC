"use client";
import { useState } from "react";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const maxNumbers = 4;
  const pages = [];

  if (totalPages <= maxNumbers) {
    pages.push(...Array.from({ length: totalPages }, (_, index) => index + 1));
  } else {
    pages.push(1, 2, 3, 4);
  }

  return (
    <div className="flex justify-center mt-6 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition"
      >
        &#9665;
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-full shadow-md transition font-semibold ${
            currentPage === page
              ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white border-2 border-blue-700"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}
      {totalPages > maxNumbers && <span className="px-2 py-2">...</span>}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition"
      >
        &#9655;
      </button>
    </div>
  );
}
