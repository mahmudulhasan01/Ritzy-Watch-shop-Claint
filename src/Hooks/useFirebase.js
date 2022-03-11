import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initialaizedfirebase from "../FireBase/firebase.init";

// initialaizedfirebase
initialaizedfirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState([]);

  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();

  // user ovserver---
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  const logOut = signOut(auth)
    .then(() => {})
    .catch((error) => {});

  return {
    user,
    logOut,
  };
};

export default useFirebase;
