import notesStore from "../stores/notesStore";

export default function CreateForm() {
  const store = notesStore();
  if (store.editForm._id) return <></>;

  return (
    <div>
      <h2 style={{color:"blue"}}>Add a new note :</h2>
      <form className="create" onSubmit={store.addNote}>
        <input
          style={{ width: "50%", backgroundColor: "white",opacity:0.8,borderRadius:15 }}
          onChange={store.addAndUpdateNoteForm}
          value={store.addForm.title}
          name="title"
          type="text"
          placeholder="Title"
        />
        <br></br>
        <textarea
          style={{ width: "50%",backgroundColor: "white" ,opacity:0.8,borderRadius:15}}
          onChange={store.addAndUpdateNoteForm}
          value={store.addForm.body}
          name="body"
          placeholder="Body"
        />
        <br></br>
        <button style={{background:'#FFE4E1'}} type="submit">Add note</button>
      </form>
    </div>
  );
}
