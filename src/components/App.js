import NotesPage from "../pages/NotesPage";
import LoginPage from "../pages/LoginPage";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {



  return (
    <div className="App">
   <BrowserRouter>
   <ul>
    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/login">Login</Link>
    </li>



   </ul>

   <Routes>
   <Route path="/" element={<NotesPage/>}/>
   <Route path="/login" element={<LoginPage/>}/>
 

   </Routes>


   </BrowserRouter>
   
    </div>)}

export default App;
