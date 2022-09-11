import authStore from "../stores/authStore";

export default function LoginForm() {
  const store = authStore();
  return (
    <form>
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
