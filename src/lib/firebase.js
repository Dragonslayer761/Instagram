import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyDMNfCYjvJLJnUvW-uSFbqME5d9uDBWcGM",

    authDomain: "instagram-d60b9.firebaseapp.com",

    projectId: "instagram-d60b9",

    storageBucket: "instagram-d60b9.appspot.com",

    messagingSenderId: "41130961488",

    appId: "1:41130961488:web:59b31dbaa18c9c17177f55"

};
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore


export { firebase, FieldValue };