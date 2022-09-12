import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const store = authStore();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    await store.login();
    navigate("/");
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        style={{
          borderRadius: 15,
          backgroundColor: "rgba(52, 52, 52, 0.8)",
          width: "300px",
        }}
        onChange={store.updateLoginF}
        value={store.loginF.email}
        type="text"
        placeholder="email"
        name="email"
      />
      <br></br>
      <input
        style={{
          borderRadius: 15,
          backgroundColor: "rgba(52, 52, 52, 0.8)",
          width: "300px",
        }}
        onChange={store.updateLoginF}
        value={store.loginF.password}
        type="password"
        placeholder="password"
        name="password"
      /><br></br>
      <button
        style={{
          color: "black",
          borderColor: "white",
        }}
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
