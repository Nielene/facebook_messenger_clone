import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyDiXKk9k2jkXnMfSdj8OrYhy9U2v5FLdNA",
  authDomain: "facebook-messenger-clone-net.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-net.firebaseio.com",
  projectId: "facebook-messenger-clone-net",
  storageBucket: "facebook-messenger-clone-net.appspot.com",
  messagingSenderId: "691952668546",
  appId: "1:691952668546:web:0b7f104d11bb49b93c099b",
  measurementId: "G-WHNX6DC46R"
});

const db = firebaseApp.firestore();

export default db;
