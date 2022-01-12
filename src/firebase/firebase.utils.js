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

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;