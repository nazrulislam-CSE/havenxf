import { NextResponse } from 'next/server';

// Mock database
let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', publishedYear: 1949 },
];

export async function GET() {
  return NextResponse.json(books);
}

export async function POST(request: Request) {
  const newBook = await request.json();
  const book = { id: books.length + 1, ...newBook };
  books.push(book);
  return NextResponse.json(book, { status: 201 });
}

export async function PUT(request: Request) {
  const updatedBook = await request.json();
  const index = books.findIndex(book => book.id === updatedBook.id);
  if (index !== -1) {
    books[index] = updatedBook;
    return NextResponse.json(updatedBook);
  }
  return NextResponse.json({ error: 'Book not found' }, { status: 404 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  books = books.filter(book => book.id !== id);
  return NextResponse.json({ success: true });
}