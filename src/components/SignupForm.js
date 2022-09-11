import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const store = authStore();
  const navigate = useNavigate();
  const  handleSignup = async  (e) => {
    e.preventDefault();
    await store.signup();
    navigate("/");

  };

  return (
    <form onSubmit={handleSignup}>
      <input
        onChange={store.updateSignupF}
        value={store.signupF.email}
        type="text"
        placeholder="email"
        name="email"
      />
      <input
        onChange={store.updateSignupF}
        value={store.signupF.password}
        type="password"
        placeholder="password"
        name="password"
      />
      <button type="submit">Signup</button>
    </form>
  );
}
