import authStore from "../stores/authStore";

export default function LoginForm() {
  const store = authStore();
  return (
    <form>
      <input
        value={store.loginF.email}
        onChange={store.updateLoginF}
        type="text"
        placeholder="email"
        name="email"

      />
      <input
        value={store.loginF.password}
        onChange={store.updateLoginF}
        type="password"
        placeholder="password"
        name="password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
