import { createContext, useEffect, useState } from "react";

import auth from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

//social auth provider
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const ContextApi = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //creat user
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update user profile
  const updateUserProfile = (name, Image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: Image,
    });
  };

  //sign in user
  const SignInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

//Google Login]
const googleLogin =()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
}
//github login
const gitHubLogin =()=>{
    setLoading(true)
    return signInWithPopup(auth,githubProvider)
}
  //observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //sign out
  const LogOut = () => {
    setLoading(true);
    //first of all user null korte hobe
    setUser(null);
    signOut(auth);
  };

  const authInfo = {
    user,
    creatUser,
    updateUserProfile,
    SignInUser,
    LogOut,
    loading,
    googleLogin,
    gitHubLogin
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextApi;
