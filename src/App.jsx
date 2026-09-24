import Header from "./Header"
import Footer from "./Footer"
import BookCard from "./BookCard"
const author = "Suzanne Collins"
export default function app(){
  return (
      <div className="app">
        <Header></Header>

        <section className="panel">
          <h2 className="panel-title">Currently reading</h2>
          <div className="panel-body">
            <BookCard title="To Kill a Mockingbird" author="Harper Lee" pages="323"/>
            <BookCard title="The Hunger Games" author="Suzanne Collins"/>
          </div>
        </section>

        <section className="panel">
          <h2 className="panel-title">Want to read</h2>
          <div className="panel-body">
            <BookCard title="Harry Potter and the Sorcerer's Stone" author="J.K. Rowling"/>
            <BookCard title="Pride and predjudice" author="Jane Austen"/>
          </div>
          <Footer></Footer>
        </section>
      </div>

  )
}