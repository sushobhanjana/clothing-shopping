import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDT2YugkUhZRKcoTSanZoDQgpj0nRnszfc",
    authDomain: "shoppinglist-87cf3.firebaseapp.com",
    projectId: "shoppinglist-87cf3",
    storageBucket: "shoppinglist-87cf3.appspot.com",
    messagingSenderId: "434550688295",
    appId: "1:434550688295:web:a00c6bd93eed9ceb7d9c02",
    measurementId: "G-5T9Z37CYKF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;