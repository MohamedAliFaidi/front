import NotesPage from "../pages/NotesPage";
import LoginPage from "../pages/LoginPage";
import RequireAuth from "../components/RequireAuth";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";
import authStore from "../stores/authStore";

function App() {
  const store = authStore();
  const myStyle = {
    height: "100vh",
    display: "inline-block",
    fontSize: "20px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  if (!store.loggedIn) {
    return (
      <div style={myStyle} className="App">
        <BrowserRouter>
          
              <Link style={{marginRight:"20px",fontSize:"35px"}} to="/login">Login</Link>
              <Link style={{fontSize:"35px"}} to="/signup">Signup</Link>
            
          

          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
        <div style={{fontSize:"50px",fontFamily: "'Courier New', monospace", marginTop:"420px"}}>Here you can store your notes for free<br></br>Login or Signup for acces</div>

      </div>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
            <Link  style={{marginRight:"20px",fontSize:"35px"}} to="/">Home</Link>
          

            <Link style={{fontSize:"35px"}} to="/logout">Logout</Link>

        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <NotesPage />
              </RequireAuth>
            }
          />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
