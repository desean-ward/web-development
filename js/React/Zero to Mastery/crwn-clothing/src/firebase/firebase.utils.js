import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/* Configuration Object Copied From Firebase Console */
const config = {
    apiKey: "AIzaSyDNtlhipyVHgrUDvWQwZrYct6ZP4wCkklw",
    authDomain: "crwn-db-b2fe5.firebaseapp.com",
    databaseURL: "https://crwn-db-b2fe5.firebaseio.com",
    projectId: "crwn-db-b2fe5",
    storageBucket: "crwn-db-b2fe5.appspot.com",
    messagingSenderId: "852622354065",
    appId: "1:852622354065:web:24092368c5bffea5398130",
    measurementId: "G-M5N9KFM744"
};

/* Initialize the database */
firebase.initializeApp(config);

/* For Google Database (store) Authentication */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* Setup Google Authentication */
const provider = new firebase.auth.GoogleAuthProvider();

/* To always trigger the Google popup */
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;