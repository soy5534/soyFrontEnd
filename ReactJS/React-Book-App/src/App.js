import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import CreateBook from './pages/CreateBook';
import { Link } from 'react-router-dom';


function App() {
  const [books, setBooks] = useState([
     {id : 1, writer : "Writer1", title : "title1", releaseDate : "2024-03-27"}
    ,{id : 2, writer : "Writer2", title : "title2", releaseDate : "2024-03-27"}
    ,{id : 3, writer : "Writer3", title : "title3", releaseDate : "2024-03-27"}
  ]);  
  const [newBook, setNewBook] = useState({id : "1", writer : "1", title : "1", releaseDate : "1"});
  const onAddBook = () => {
    setBooks([...books, newBook]);
  }
  const handlerDeleteBook = (id) => {
    // 지우기 전 books : [{}, {}, {}]
    // 지운 후 books : [{}. {}]
    const updateBooks = books.filter((book) => book.id !== id);
    setBooks(updateBooks); // 3개였던 객체가 2개로 됨.
  }
  const handlerInputChange = (e) => {
    const [name, value] = e.target;
    setNewBook({...newBook, [name] : value}); // sum += i;
  }
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">List</Link>
          </li>
          <li>
            <Link to="/create">Add New Book</Link>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path="/" element={<Home books={books} onDeleteBook={handlerDeleteBook} />} />
      <Route path="/create" element={<CreateBook newBook={newBook} onAddBook={onAddBook} onInputChange={handlerInputChange} />} />
    </Routes>
    </div>
  );
}

export default App;
