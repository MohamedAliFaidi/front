import create from "zustand";
import axios from "axios";

const authStore = create((set) => ({
  loggedIn: null,

  loginF: { email: "", password: "" },
  updateLoginF: (e) => {
    const { loginF } = authStore.getState();

    const { name, value } = e.target;
    // set((state) => {
    //   return {
    //     LoginF: {
    //       ...state.loginF,
    //       [name]: value,
    //     },
    //   };
    // });
    set({
      loginF: {
        ...loginF,
        [name]: value,
      },
    });
  },
  login: async (e) => {
    e.preventDefault();
    const { loginF } = authStore.getState();
    const res = await axios.post("/login", loginF, { withCredentials: true });
    set({ loggedIn: true });

    console.log(res);
  },

  checkAuth: async () => {
    try {
      const res = await axios.get("/checkAuth", { withCredentials: true });
      set({ loggedIn: true });
    } catch (err) {
      console.log(err);
      set({ loggedIn: false });
    }
  },
}));

export default authStore;
