
import notesStore from '../stores/notesStore';


export default  function UpdateForm() {
    const store = notesStore();
 if (!store.editForm._id) return <></>;


  return (
   
 
        <div>
          <h2>update</h2>
          <form style={{backroundcolor:"grey"}} onSubmit={store.updateNote}>
            <input  style={{width:"50%",backgroundColor:"white",opacity:0.8,borderRadius:15 }}
              onChange={store.handleUpdateForm}
              value={store.editForm.title}
              name="title"
            /><br></br>
            <textarea  style={{width:"50%",backgroundColor:"white",opacity:0.8,borderRadius:15 }}
              onChange={store.handleUpdateForm}
              value={store.editForm.body}
              name="body"
            /><br></br>
            <button style={{background:'#FFE4E1'}} type="submit">Update</button>
          </form>
        </div>
  );
}

