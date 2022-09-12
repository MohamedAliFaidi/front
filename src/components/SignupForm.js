import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const store = authStore();
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    await store.signup();
    navigate("/");
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        style={{
          borderRadius: 15,
          backgroundColor: "rgba(52, 52, 52, 0.8)",
          width: "300px",
        }}
        onChange={store.updateSignupF}
        value={store.signupF.email}
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
        onChange={store.updateSignupF}
        value={store.signupF.password}
        type="password"
        placeholder="password"
        name="password"
      />
      <br></br>
      <button
        style={{
          color: "black",
          borderColor: "white",
        }}
        type="submit"
      >
        Signup
      </button>
    </form>
  );
}
