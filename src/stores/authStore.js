import create from "zustand";

const authStore = create((set) => ({
  loginF: { email: "", password: "" },
  updateLoginF: (e) => {
    const { loginF }= authStore.getState();

    const { name, value } = e.target;
    // set((state) => {
    //   return {
    //     LoginF: {
    //       ...state.loginF,
    //       [name]: value,
    //     },
    //   };
    // });
    set ({
      loginF:{
        ...loginF,
        [name]: value,
      }
    })
  },
}));

export default authStore;
