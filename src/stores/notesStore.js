import create from "zustand";
import axios from "axios";

const notesStore = create((set) => ({
  notes: null,
  addForm: {
    title: "",
    body: "",
  },
  editForm: {
    _id: null,
    title: "",
    body: "",
  },
  fetchNotes: async () => {
    // Fetch notes from the server
    const response = await axios.get("http://localhost:3000/notes");
    // set fetched notes on state
    set({ notes: response.data.notes });
  },
  addAndUpdateNoteForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return { addForm: { ...state.addForm, [name]: value } };
    });
  },

  addNote: async (e) => {
    e.preventDefault();
    const { addForm, notes } = notesStore.getState();
    //create a new note
    const response = await axios.post("http://localhost:3000/notes", addForm);

    // update the notes state

    set({
      notes: [...notes, response.data.note],
      addForm: { title: "", body: "" },
    });
  },
  deleteNote: async (_id) => {
    // delete a note
    const response = await axios.delete(`http://localhost:3000/notes/${_id}`);
    const { notes } = notesStore.getState();
    console.log(response);
    // update the notes state
    const newNotes = notes.filter((note) => {
      return note._id !== _id;
    });
    set({ notes: newNotes });
  },
  handleUpdateForm: (e) => {
    const name = e.target.name;
    const value = e.target.value;
    set((state) => {
      return { editForm: { ...state.editForm, [name]: value } };
    });
  },
  toggleupdate: ({ _id, title, body }) => {
    set({ editForm: { _id, title, body } });
  },

  updateNote: async (e) => {
    e.preventDefault();

    const {
      editForm: { _id, title, body },
      notes,
    } = notesStore.getState();

    // update request
    const response = await axios.put(`http://localhost:3000/notes/${_id}`, {
      title,
      body,
    });
    //update the notes state
    const newNotes = [...notes];
    const index = newNotes.findIndex((note) => note._id === _id);
    newNotes[index] = response.data.note;
    set({ notes: newNotes, editForm: { _id: null, title: "", body: "" } });
  },
}));

export default notesStore;
