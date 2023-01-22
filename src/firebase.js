import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATYpCLO0U-TDYP-wouPNmefi6HDiXV2F0",
  authDomain: "react-discord-clone-532b4.firebaseapp.com",
  projectId: "react-discord-clone-532b4",
  storageBucket: "react-discord-clone-532b4.appspot.com",
  messagingSenderId: "728187806414",
  appId: "1:728187806414:web:f093a086e08f1c4b83669f",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
