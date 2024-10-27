import { createContext, useState } from "react"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../components/firebase.config";

const auth = getAuth(app);


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user ,setuser] = useState(null);
    const [loading , setloading] = useState(true);
    const createUser = (email,password) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }



    const userInfo ={
        user,
        loading,
        createUser,
    }
  return (
    <AuthContext.Provider value={userInfo}>
         {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider