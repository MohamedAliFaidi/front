import { useEffect } from "react"
import authStore from "../stores/authStore"
import LoginPage from "./LoginPage";

export default function LogoutPage() {
    const store = authStore();
    useEffect(()=>{
        store.logout();

    },[])
  return (
    <>
    <h1>Logged out with success</h1>
    <LoginPage/>
    </>
  )
}
