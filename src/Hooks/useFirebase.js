import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initialaizedfirebase from "../FireBase/firebase.init";
import { useEffect } from "react";

// initialaizedfirebase
initialaizedfirebase();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState([]);

  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();
  const googleLogIn = signInWithPopup(auth, googleProvider)
    .then((result) => {
      setUser(result.user);
    })
    .catch((error) => {
      const errorMessage = error.message;
    });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const logOut = signOut(auth)
    .then(() => {})
    .catch((error) => {});

  return {
    user,
    googleLogIn,
    logOut,
  };
};

export default useFirebase;
