"use client";

import { useEffect, useState } from "react";
import { Book } from "@/lib/data";

export default function AdminPage(){
    const [books, setBooks] = useState<Book[]>([]);
    useEffect(() => {
        const fetchBooks = async () => {
            const res = await fetch('/api/books');
            const data = await res.json();
            setBooks(data.books);
        }
        fetchBooks();
    }, [])

    const handleDelBook = async (id: number, isDeleted: boolean = true) => {
        const res = await fetch(`/api/books/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id, isDeleted })
        })
        const data = await res.json();
        console.log("from deletedHandle \n",data);
        if(!data.success){
            alert(data.message || 'Error deleting book');
            return;
        }
        setBooks(books.filter((book) => book.id !== id));
        alert('Book deleted successfully');
    }

    const updateStatus = async ( id: number, status: "Published" | "Rejected") => {
        const res = await fetch(`/api/books/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
            const data = await res.json();
            if(!data.success){
                alert(data.message || 'Error updating book status');
                return;
            }
            setBooks(books.map((book) => 
                book.id === data.book.id ? data.book : book
            ));
            alert('Book status updated successfully');
    }

    return(
        <div className="min-h-screen p-8">
            {/* HEADER */}
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white-800">Editor Dashboard</h1>
                <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-bold">
                    Admin Mode
                </div>
            </header>

            {/* stats cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-base-200 p-6 rounded-lg shadow border-1-4 border-yellow-400">
                    <h3 className="text-gray-500 text-sm">Total submissions</h3>
                    <p className="text-3x1 font-bold">{books.length}</p>
                </div>
                <div className="bg-base-200 p-6 rounded-lg shadow border-1-4 border-green-500">
                    <h3 className="text-gray-500 text-sm">Published Books</h3>
                    <p className="text-3x1 font-bold">
                        {books.filter((book) => book.status === "Published").length}
                    </p>
                </div>

            </div>
                {/* Management Table */}
                <div className="bg-base rounded-lg shadow overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-base-200 text-gray-200">
                            <tr>
                                <th className="p-4">Title</th>
                                <th className="p-4">Author</th>
                                <th className="p-4">Current Status</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {books.map((book) => (
                                <tr key={book.id} className="hover:bg-base-200">
                                    <td className="p-4 font-medium text-black-800">{book.title}</td>
                                    <td className="p-4 text-black-600">{book.author}</td>
                                
                                {/*status column*/}
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold
                                      ${book.status === "Published" ? "bg-green-100 text-green-700" :
                                        book.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                                        "bg-red-100 text-red-700"
                                      }`}
                                    >
                                        {book.status}
                                    </span>
                                </td>

                                {/*actions column*/}
                                <td className="p-4 flex gap-2">
                                    <button
                                        onClick={() => updateStatus(book.id, "Published")}
                                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
                                    >
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => updateStatus(book.id, "Rejected")}
                                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                                    >
                                        Reject
                                    </button>
                                    
                                        <button className="text-white ml-2 hover:text-base-600"
                                            onClick={() => handleDelBook(book.id, book.isDeleted)}
                                            >
                                        (x)
                                        </button>
                                    
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                    
            </div>
    );               
}