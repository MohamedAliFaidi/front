import create from "zustand";
import axios from "axios";

const authStore = create((set) => ({
  loggedIn: null,

  loginF: { email: "", password: "" },

  signupF: { email: "", password: "" },

  updateLoginF: (e) => {
    const { loginF } = authStore.getState();

    const { name, value } = e.target;

    set({
      loginF: {
        ...loginF,
        [name]: value,
      },
    });
  },

  updateSignupF: (e) => {
    const { signupF } = authStore.getState();

    const { name, value } = e.target;

    set({
      signupF: {
        ...signupF,
        [name]: value,
      },
    });
  },

  login: async () => {
    const { loginF } = authStore.getState();
    const res = await axios.post("/login", loginF, { withCredentials: true });
    set({ loggedIn: true });

    console.log(res);
  },

  checkAuth: async () => {
    try {
      await axios.get("/checkAuth", { withCredentials: true });
      set({ loggedIn: true });
    } catch (err) {
      console.log(err);
      set({ loggedIn: false });
    }
  },

  signup: async (e) => {
    e.preventDefault();

    console.log("signup");
  }
}));

export default authStore;
