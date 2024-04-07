import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [bgImg, setBgImg] = useState(null);
  const [loader, setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoader(false);
      } else {
        setUser(null);
        setLoader(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const emailPassSignIn = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        googleSignIn,
        logOut,
        bgImg,
        setBgImg,
        loader,
        emailPassSignIn,
        createUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
