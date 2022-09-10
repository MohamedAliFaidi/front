import notesStore from "../stores/notesStore"

export default function CreateForm() {
    const store = notesStore();
 if (store.editForm._id) return <></>

  return (
    <div>
    <h2>Add a new note :</h2>
    <form onSubmit={store.addNote}>
      <input
        onChange={store.addAndUpdateNoteForm}
        value={store.addForm.title}
        name="title"
        type="text"
        placeholder="Title"
      />
      <textarea
        onChange={store.addAndUpdateNoteForm}
        value={store.addForm.body}
        name="body"
        placeholder="Body"
      />
      <button type="submit">Add note</button>
    </form>
  </div>
  )
}
