import {  useEffect } from "react";
import notesStore from "../stores/notesStore";
import Notes from "./Notes";
import UpdateForm from "./UpdateForm";
function App() {
  const store = notesStore();

  // use effect
  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div className="App">
     <Notes/>
     <UpdateForm/>


      {!store.editForm._id && (
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
      )}
    </div>
  );
}

export default App;
