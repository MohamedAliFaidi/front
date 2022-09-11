import notesStore from "../stores/notesStore";
import { useEffect } from "react";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import CreatForm from "../components/CreateForm";

export default function NotesPage() {
  const store = notesStore();

  // use effect
  useEffect(() => {
    store.fetchNotes();
  }, [store]);

  return (
    <div>
      <Notes />
      <UpdateForm />
      <CreatForm/>
    </div>
  );
}