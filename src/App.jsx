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

export default function App() {
    return (
        <div className="app">
            <Header />

            <Panel title="Currently reading">
                <BookCard 
                    title="To Kill A Mockingbird"
                    author="Harper Lee"
                    pages={323}
                />
                <BookCard
                    title="The Hunger Games"
                    author="Suzanne Collins"
                    rating="5"
                    books={ ['Hunger Games', 'Mockingjay', 'Catching Fire'] }
                />
            </Panel>

            <Panel title="Want to read">
                <BookCard
                    title="Harry Potter"
                    author="J.K. Rowling"
                    rating="5"
                />
                <BookCard
                    title="Pride and Prejudice"
                    author="Jane Austen"
                    rating="4"
                />
            </Panel>

            <Footer></Footer>
        </div>
    )
}