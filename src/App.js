import "./App.css";
import BookListContextProvider from "./contexts/BookListContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";

function App() {
  return (
    <BookListContextProvider>
      <div className="App">
        <Navbar />
        <BookList />
      </div>
    </BookListContextProvider>
  );
}

export default App;
