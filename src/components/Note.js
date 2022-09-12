import notesStore from "../stores/notesStore"; 
export default function Note({note,i}) {
  const store = notesStore((store)=>{
    return {
      deleteNote:store.deleteNote,
      toggleupdate:store.toggleupdate

    }
  });
  return (
    <div style={{ opacity:0.8, borderRadius:15, display:"inline-table", backgroundColor :"white" , width: "300px", minHeight: "200px" ,margin:"10px 10px 10px 10px "}}>
    <h2 style={{ padding: "10px 20px", textAlign: "center", color: "blue",}}>Note {i} :</h2>
    <div>
    <div className="note" key={note._id}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button style={{background:'#FFE4E1' ,borderRadius:"30%"}} onClick={() =>{ store.deleteNote(note._id)}}>Delete</button>
      <button style={{background:'#FFE4E1',borderRadius:"30%"}} onClick={() => store.toggleupdate(note)}>Update</button>
    </div>
    </div>
    </div>
  );
}
