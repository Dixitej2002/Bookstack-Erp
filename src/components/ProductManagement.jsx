import React, { useState } from 'react';
import './ProductManagement.css';
import Header from './Header';

const ProductsManagement = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki', genre: 'Finance', price: 10, stockQuantity: 20, imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/95/840/desktop-wallpaper-rich-dad-poor-dad-by-robert-kiyosaki.jpg' },
    { id: 2, title: 'A Random Walk Down Wall Street', author: 'Burton G. Malkiel', genre: 'Investing', price: 15, stockQuantity: 25, imageUrl: 'https://m.media-amazon.com/images/I/61U+dFyFG3L._AC_UF1000,1000_QL80_.jpg' },
    { id: 3, title: 'Atomic Habits', author: 'James Clear', genre: 'Self-help book', price: 20, stockQuantity: 25, imageUrl: 'https://i.pinimg.com/736x/09/aa/10/09aa10353c7b6a2d67d68a90a49ccd67.jpg' },
    { id: 4, title: 'The Psychology of Money', author: 'Morgan Housel', genre: 'Self-help book', price: 20, stockQuantity: 3, imageUrl: 'https://i.pinimg.com/736x/92/c8/27/92c82779d9715930b51b162bc90576ac.jpg' },
  ]);

  const [formData, setFormData] = useState({
    id: '',
    title: '',
    author: '',
    genre: '',
    price: '',
    stockQuantity: '',
    imageUrl: ''
  });

  const addBook = () => {
    setBooks([...books, { ...formData, id: books.length + 1 }]);
    setFormData({ id: '', title: '', author: '', genre: '', price: '', stockQuantity: '', imageUrl: '' });
  };

  const editBook = () => {
    const updatedBooks = books.map(book =>
      book.id === formData.id ? formData : book
    );
    setBooks(updatedBooks);
    setFormData({ id: '', title: '', author: '', genre: '', price: '', stockQuantity: '', imageUrl: '' });
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      editBook();
    } else {
      addBook();
    }
  };

  const handleEdit = (book) => {
    setFormData(book);
  };

  return (
    <>
      <Header></Header>
      <div className="container">
        <h2>Products</h2>
        <div className="book-list">
          {books.map(book => (
            <div className="book-card" key={book.id}>
              <img src={book.imageUrl} alt={book.title} className="book-image" />
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Price:</strong> ${book.price}</p>
              <p><strong>Stock Quantity:</strong> {book.stockQuantity}</p>
              <button className="delete-btn" onClick={() => deleteBook(book.id)}>Delete</button>
              <button className="edit-btn" onClick={() => handleEdit(book)}>Edit</button>
            </div>
          ))}
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
            <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} />
            <input type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} />
            <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
            <input type="number" name="stockQuantity" placeholder="Stock Quantity" value={formData.stockQuantity} onChange={handleChange} />
            <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
            <button type="submit">{formData.id ? 'Edit Book' : 'Add Book'}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductsManagement;
