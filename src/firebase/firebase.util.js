import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDurdJ75W991JpuJLWrR2k1GknXfbpVXa4",
    authDomain: "stopshop-44251.firebaseapp.com",
    projectId: "stopshop-44251",
    storageBucket: "stopshop-44251.appspot.com",
    messagingSenderId: "924811597221",
    appId: "1:924811597221:web:41017192f227d794db444c",
    measurementId: "G-Q3SCD90414"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;