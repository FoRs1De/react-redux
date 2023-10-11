import './BookList.css';
import { useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="app-block book-list">
      <h1>Book List</h1>
      {books.length === 0 ? (
        <p>No Books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              <div className="book-info">
                {book.title} by {book.author}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
