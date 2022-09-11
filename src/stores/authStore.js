import  create from "zustand";
import axios from "axios";

const authStore = create((set) => ({
  loginF: { email: "", password: "" },
  updateLoginF: (e) => {
    const { name, value } = e.target;
    const { loginF } = authStore.loginF.getState();
    set({
      loginF: { ...loginF, [name]: value },
    });
  },
}));

export default authStore;
