import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACiI9W9mt-6zUN4LAMG4USFNAZS9Zhyr4",
  authDomain: "fileshare-c0d0d.firebaseapp.com",
  projectId: "fileshare-c0d0d",
  storageBucket: "fileshare-c0d0d.appspot.com",
  messagingSenderId: "841323780359",
  appId: "1:841323780359:web:2f26a112535e6db4b78da2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
