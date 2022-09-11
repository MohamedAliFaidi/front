import authStore from "../stores/authStore";

export default function SignupForm() {
    const store = authStore();
    const handleSignup = (e) => {
        e.preventDefault();
        store.signup();



    }




  return  <form onSubmit={handleSignup}>
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
    </form>;
}
