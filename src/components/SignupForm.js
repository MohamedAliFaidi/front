import authStore from "../stores/authStore";

export default function SignupForm() {
    const store = authStore();
  return  <form onSubmit={store.signup}>
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
