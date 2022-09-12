import notesStore from "../stores/notesStore";
import Note from "./Note";
export default function  Notes() {
    const store = notesStore();
    return ( <div>
        <h2 style={{color:"blue"}}>Notes :</h2>
        {store.notes &&
          store.notes.map((note,i) => {
            return (
             <Note note={note} i={i} key={note._id} />
            );
          })}
      </div>)
}