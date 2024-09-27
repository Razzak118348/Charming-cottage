import { createContext, useEffect, useState } from "react";

import auth from "../Firebase/Firebase.config"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth"
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)

const ContextApi = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    //creat user
    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //update user profile
    const updateUserProfile = (name, Image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: Image
        })
    }

    //sign in user
    const SignInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    //observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
        })
        return () => unSubscribe()
    }, [])

    //sign out
    const LogOut = () => {
        //first of all user null korte hobe
        setUser(null)
        signOut(auth)
    }

    const authInfo = {
        user,
        creatUser,
        updateUserProfile,
        SignInUser,
        LogOut,
        loading,

    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default ContextApi;