import authStore from "../stores/authStore"
import { useEffect } from "react"
export default function RequireAuth(props) {
    const store = authStore();
   
    useEffect(() => {
        if(store.loggedIn===null){
            store.checkAuth();
        }
    }, []);



    if (!store.loggedIn) {
  return <h1>Not Logged In</h1>;

}
   return <div>{props.children}</div>
}
