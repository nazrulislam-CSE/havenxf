'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
// import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

type Book = {
  id: number;
  title: string;
  author: string;
  publishedYear: number;
};

export default function BookCRUD() {
  const queryClient = useQueryClient();
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [newBook, setNewBook] = useState<Omit<Book, 'id'>>({ 
    title: '', 
    author: '', 
    publishedYear: 0 
  });

  // Fetch books
  const { data: books, isLoading, error } = useQuery<Book[]>({
    queryKey: ['books'],
    queryFn: () => axios.get('/api/books').then(res => res.data),
  });

  // Create book mutation
  const createMutation = useMutation({
    mutationFn: (book: Omit<Book, 'id'>) => 
      axios.post('/api/books', book).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
      setNewBook({ title: '', author: '', publishedYear: 0 });
    },
  });

  // Update book mutation
  const updateMutation = useMutation({
    mutationFn: (book: Book) => 
      axios.put('/api/books', book).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
      setEditingBook(null);
    },
  });

  // Delete book mutation
  const deleteMutation = useMutation({
    mutationFn: (id: number) => 
      axios.delete('/api/books', { data: { id } }).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBook) {
      updateMutation.mutate(editingBook);
    } else {
      createMutation.mutate(newBook);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading books</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Book CRUD</h1>
      
      {/* Add/Edit Book Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {editingBook ? 'Edit Book' : 'Add New Book'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={editingBook ? editingBook.title : newBook.title}
                onChange={(e) => 
                  editingBook 
                    ? setEditingBook({...editingBook, title: e.target.value})
                    : setNewBook({...newBook, title: e.target.value})
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={editingBook ? editingBook.author : newBook.author}
                onChange={(e) => 
                  editingBook 
                    ? setEditingBook({...editingBook, author: e.target.value})
                    : setNewBook({...newBook, author: e.target.value})
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Published Year</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                value={editingBook ? editingBook.publishedYear : newBook.publishedYear || ''}
                onChange={(e) => 
                  editingBook 
                    ? setEditingBook({...editingBook, publishedYear: parseInt(e.target.value)})
                    : setNewBook({...newBook, publishedYear: parseInt(e.target.value)})
                }
                required
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            {editingBook && (
              <button
                type="button"
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={() => setEditingBook(null)}
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {editingBook ? 'Update Book' : 'Add Book'}
            </button>
          </div>
        </form>
      </div>

      {/* Books List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Book List</h2>
        {books && books.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">Title</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">Author</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">Year</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b border-gray-200">{book.title}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{book.author}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{book.publishedYear}</td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingBook(book)}
                          className="p-1 text-blue-600 hover:text-blue-800"
                          title="Edit"
                        >
                          {/* <PencilIcon className="h-5 w-5" /> */}
                        </button>
                        <button
                          onClick={() => deleteMutation.mutate(book.id)}
                          className="p-1 text-red-600 hover:text-red-800"
                          title="Delete"
                        >
                          {/* <TrashIcon className="h-5 w-5" /> */}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No books available. Add some books to get started.</p>
        )}
      </div>
    </div>
  );
}