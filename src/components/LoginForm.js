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
        onChange={store.updateLoginF}
        value={store.loginF.email}
        type="text"
        placeholder="email"
        name="email"
      />
      <input
        onChange={store.updateLoginF}
        value={store.loginF.password}
        type="password"
        placeholder="password"
        name="password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
