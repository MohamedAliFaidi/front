
import notesStore from '../stores/notesStore';


export default  function UpdateForm() {
    const store = notesStore();
 if (!store.editForm._id) return <></>;


  return (
   
 
        <div>
          <h2>update</h2>
          <form onSubmit={store.updateNote}>
            <input
              onChange={store.handleUpdateForm}
              value={store.editForm.title}
              name="title"
            />
            <textarea
              onChange={store.handleUpdateForm}
              value={store.editForm.body}
              name="body"
            />
            <button type="submit">Update</button>
          </form>
        </div>
  );
}

