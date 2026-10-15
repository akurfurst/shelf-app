import Header from "./components/Header"
import Footer from "./components/Footer"
import BookCard from "./components/BookCard"
import Panel from "./components/Panel"
import { useState } from "react";
import Search from "./components/Search";
import AddBook from "./components/AddBook"

const BOOKS = [
    {
        id: "b1",
        title: "Red Rising",
        author: "Pierce Brown",
        status: "reading",
        rating: 5,
        tags: ["sci-fi", "dystopian", "series"],
    },
    {
        id: "b2",
        title: "The Eye of the World",
        author: "Robert Jordan",
        status: "reading",
        rating: 4,
        tags: ["fantasy", "epic", "series"],
    },
    {
        id: "b3",
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        status: "finished",
        rating: 5,
        tags: ["fantasy", "series"],
    },
    {
        id: "b4",
        title: "The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        status: "want",
        rating: 0,
        tags: ["fantasy", "classic", "series"],
    },
    {
        id: "b5",
        title: "The Hunger Games",
        author: "Suzanne Collins",
        status: "finished",
        rating: 4,
        tags: ["dystopian", "ya", "series"],
    },
    {
        id: "b6",
        title: "The Body Keeps The Score",
        author: "Bessel van der Kolk",
        status: "unstarted",
        rating: 5,
        tags: ["self help", "psychology"],
    },
];



//const booksReading = BOOKS.length === 0 ?
//    <p>No books found</p> :
//   <p>We got books</p>;

//et booksWaiting;
if (BOOKS.length === 0) {
    //booksWaiting = <p>No books to read yet</p>
} else {
    //booksWaiting = <p>I've got books</p>
}

// const bookCards = BOOKS.map(book => <BookCard 
//     title={book.title} 
//     author={book.author} 
//     pages={book.pages} 
//     rating={book.rating} />);

    
//const bookCards = BOOKS.map(book => <BookCard book={book} />);

export default function App() {
    const [books, setBooks] = useState(BOOKS);
    const [query, setQuery] = useState("");

    function addBook(title){
        const newBook = {
            id: title,
            title: title,
            author: "",
            status: "reading",
            pages: 0,
            tags:[]
        }
        setBooks([...books, newBook])
    }

    const filteredBooks = query ? 
        books.filter(el => el.title.toLowerCase().includes(query.toLocaleLowerCase())) : 
        books;

    //derived values
    const currentlyReading = filteredBooks.filter(el => el.status === "reading");
    const finishedReading = filteredBooks.filter(el => el.status === "finished");
    const wishlist = filteredBooks.filter(el => el.status === "want");
    //const unstarted = filteredBooks.filter(el => el.status === "unstarted");

    return (
        <div className="app">
            <Header />
            <Search value={query} onQueryChange={setQuery}/>
            <AddBook onAdd={addBook}/>

            <Panel title="Currently reading">
                {currentlyReading.length > 0 && currentlyReading.map(book => <BookCard key={book.id} book={book}/>)}
            </Panel>

            <Panel title="Want to read">
                {wishlist.length > 0 && wishlist.map(book => <BookCard key={book.id} book={book} /> )}
            </Panel>

            <Panel title="Finished reading">
                {finishedReading.length > 0 && finishedReading.map(book => <BookCard key={book.id} book={book} /> )}
            </Panel>

            <Footer></Footer>
        </div>
    )
}