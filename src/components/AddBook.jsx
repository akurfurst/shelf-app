import { useState } from "react"

export default function AddBook({onAdd}){
    const [draft, setDraft] = useState("");
    return(
        <form className="add">
            <input className="add-input" type="text" value={draft} onChange={(e) => setDraft(e.target.value)}/>
            <button className="add-button" onClick={() => onAdd(draft)} >Add</button>
        </form>
)};