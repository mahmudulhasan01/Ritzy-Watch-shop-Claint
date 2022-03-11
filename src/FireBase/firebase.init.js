import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialaizedfirebase = () => {
  initializeApp(firebaseConfig);
};

export default initialaizedfirebase;
