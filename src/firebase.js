import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASns6ll4Lih5ejWNdzkr069aRAm-0xmB4",
    authDomain: "instagram-clone-6787f.firebaseapp.com",
    databaseURL: "https://instagram-clone-6787f.firebaseio.com",
    projectId: "instagram-clone-6787f",
    storageBucket: "instagram-clone-6787f.appspot.com",
    messagingSenderId: "1031262936124",
    appId: "1:1031262936124:web:7050a5dba8b60d74c3f739",
    measurementId: "G-6422699EWL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };