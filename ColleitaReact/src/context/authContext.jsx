import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth } from './../firebase/config';

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    return context;
}

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const signup = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) => 
            signInWithEmailAndPassword(auth, email, password);

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);
}

    useEffect(() => {
        auth.onAuthStateChanged(auth => setUser({email: auth.email}));
    }, []);

    return (
        <authContext.Provider value={{ signup, login, user, loginWithGoogle}}>
            {children}
        </authContext.Provider>
    );
}

export default AuthProvider;