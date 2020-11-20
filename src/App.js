import "./App.css";
import BookListContextProvider from "./contexts/BookListContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <BookListContextProvider>
      <div className="App">
        <Navbar />
        <BookList />
        <AddBook />
      </div>
    </BookListContextProvider>
  );
}

export default App;
