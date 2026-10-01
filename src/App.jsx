import Header from "./Header"
import Footer from "./Footer"
import BookCard from "./BookCard"
import Panel from "./Panel"

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
];

const booksReading = BOOKS.length === 0 ? <p>No books found</p> : <p>We got books</p>

let booksWaiting;
if(BOOKS.length === 0) {
  booksWaiting = <p>No books to read yet</p>
}else{
  booksWaiting = <p>I've got books</p>
}

const bookCards = BOOKS.map(book => <BookCard title={book.title} author={book.author} pages={book.pages} rating={book.rating}/>)

export default function App() {
    return (
        <div className="app">
            <Header />
              
            <Panel title="Currently reading">
                {bookCards}
            </Panel>

            <Panel title="Want to read">
                {booksWaiting}
            </Panel>

            <Footer></Footer>
        </div>
    )
}