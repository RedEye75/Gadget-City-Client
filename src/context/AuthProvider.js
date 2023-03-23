import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //   create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // google
  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = { user, loading, logOut, providerLogin, createUser, login };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
