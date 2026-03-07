"use client";
import { useState } from "react";
export default function Pagination() {
  const [page, setPage] = useState(1);

  return (
    <div className="flex items-center gap-2 my-6 justify-center">
      <button
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 cursor-pointer"
        disabled={page === 1}
      >
        Previous
      </button>
      {[1, 2].map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`px-3 py-1 border border-gray-300 bg-[#D1D5DB] cursor-pointer rounded ${page === p ? "bg-blue-600 text-white" : "hover:bg-gray-400"}`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => setPage((p) => Math.min(p + 1, 2))}
        className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 cursor-pointer"
        disabled={page === 2}
      >
        Next
      </button>
    </div>
  );
}
