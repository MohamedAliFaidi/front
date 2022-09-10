import notesStore from "../stores/notesStore";
export default function Note({note}) {
  const store = notesStore((store)=>{
    return {
      deleteNote:store.deleteNote,
      toggleupdate:store.toggleupdate

    }
  });
  return (
    <div key={note._id}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() =>{ store.deleteNote(note._id)}}>Delete</button>
      <button onClick={() => store.toggleupdate(note)}>Update</button>
    </div>
  );
}
