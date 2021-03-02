import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAnhdq6q6tFTKoIBY2fUdsm4Vl-gXUU45k",
  authDomain: "ecommerce-cd538.firebaseapp.com",
  projectId: "ecommerce-cd538",
  databaseURL: "https://ecommerce-cd538.firebaseio.com/",
  storageBucket: "ecommerce-cd538.appspot.com",
  messagingSenderId: "92333744345",
  appId: "1:92333744345:web:aba55cddea1f25b7975ec8",
  measurementId: "G-1VS2SE2FBG"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
