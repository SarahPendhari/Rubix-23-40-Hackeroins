import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU23ElfL3gXte-pFMSrjv5cF72et2aDxU",
  authDomain: "discord-clone-d6e2b.firebaseapp.com",
  projectId: "discord-clone-d6e2b",
  storageBucket: "discord-clone-d6e2b.appspot.com",
  messagingSenderId: "565746680402",
  appId: "1:565746680402:web:4d338fd7298e36b2e0d58b",
  measurementId: "G-3D7241G16W"
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
