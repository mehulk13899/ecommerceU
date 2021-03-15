import firebase from "firebase/app";
import 'firebase/firestore'
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


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, ...otherOptions) => {

    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)//get document object from server  id data is not preset
    //then server also return some data object value
    const snapShort = await userRef.get();//tell if data is in our database or not
    if (!snapShort.exists) {

        const { displayName, email } = userAuth;
        const createdAt = new Date();
        userRef.set(
            {
                displayName,
                email,
                createdAt,
                ...otherOptions
            }
        )
    }
    return userRef;
}


const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
    }).catch((error) => {
        console.log(error.message)
    })
}


export default firebase;