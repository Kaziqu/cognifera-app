"use client";

import React, { useEffect, useState } from "react";
import { Book } from "@/lib/data"; // Import mock data

export default function MemberPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/books', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({title, author, status: 'Pending'} )
    })
    if(!['Pending', 'Published', 'Rejected'].includes('Pending')){
        alert('Invalid status value');
        return;
    }
    const data = await res.json();
    console.log(data);
    if(!data.success){
        alert(data.message || 'Error uploading book');
        return;
    }
    
    setBooks([...books, data.book]);
    setTitle("");
    setAuthor("");
    alert('Book uploaded successfully');
  }

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch('/api/books');
      const data = await res.json();
      setBooks(data.books);
    }
    fetchBooks();
  }, [])

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-white">My Dashboard</h1>

      {/* Grid: 1 Column on Mobile, 3 Columns on Desktop */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* SECTION 1: UPLOAD FORM (Takes 1 column) */}
        <div className="bg-base-200 p-6 rounded-lg shadow border border-orange-100 h-fit">
          <h2 className="text-xl font-bold text-orange-600 mb-4">Upload Book</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Book Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border p-2 rounded"
                placeholder="Enter title..."
                required
              />
              <label className="block text-sm mb-1">Author</label>
              <input
                type="text"
                name="author"
                className="w-full border p-2 rounded"
                placeholder="enter-author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-700"
            >
              Submit Manuscript
            </button>
          </form>
        </div>

        {/* SECTION 2: STATUS TABLE (Takes 2 columns) */}
        <div className="md:col-span-2 bg-base-100 p-6 rounded-lg shadow border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-orange-600">My Submissions</h2>

          <table className="w-full text-left rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-base-200">
                <th className="p-3 font-bold text-gray-200 shadow">Title</th>
                <th className="p-3 font-bold text-gray-200 shadow">Author</th>
                <th className="p-3 font-bold text-gray-200 shadow">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Loop through the books */}
              {books.map((book) => (
                <tr key={book.id} className="border-b border-gray-300 hover:bg-base-200">
                  <td className="p-3">{book.title}</td>
                  <td className="p-3">{book.author}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold
                      ${book.status === "Published" ? "bg-green-100 text-green-700" :
                        book.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                          "bg-red-100 text-red-700"}`
                    }>
                      {book.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}