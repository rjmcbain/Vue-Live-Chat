import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsNEeeTISqorob5xQdFukWfzoa7nB_iUs",
  authDomain: "live-chat-a3bf2.firebaseapp.com",
  projectId: "live-chat-a3bf2",
  storageBucket: "live-chat-a3bf2.appspot.com",
  messagingSenderId: "770944027590",
  appId: "1:770944027590:web:5af63b0b553886b58980c7",
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
