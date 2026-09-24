export default function BookCard({title, author}){
    return(
        <article className="card">
            <h3 className="card-title">{title}</h3>
            <p className="card-author">{author}</p>
            {/* <p className="card-pages">Pages: {pages}</p> */}
        </article>
    )
}