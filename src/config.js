// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCzPGqgKWP6VWZDLKglg41aD0bcdHc90U0",
    authDomain: "instagram-clone-94a2e.firebaseapp.com",
    projectId: "instagram-clone-94a2e",
    storageBucket: "instagram-clone-94a2e.appspot.com",
    messagingSenderId: "1033305039287",
    appId: "1:1033305039287:web:21d2067e06d337f273c832",
    measurementId: "G-01P7Q7NN1G"
  };

  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth = firebase.auth();
  const storage=firebase.storage();

  export {db,auth,storage}


