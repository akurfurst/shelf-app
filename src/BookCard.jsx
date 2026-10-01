
export default function BookCard({title, author, pages = 0, rating = 0}) {

    //derived value                                
    const cleanTitle = title.toUpperCase();

    const bookRating = rating || 3;
    const ratingsString = bookRating > 0 && <p>{"★".repeat(bookRating)}</p>

    return (
        <article className="card">
            <h3 className="card-title">{cleanTitle}</h3>
            <p className="card-author">{author}</p>
            <p>Pages: {pages}</p>
            {ratingsString}
            <span>Read carefully!</span>
        </article>
    )
}