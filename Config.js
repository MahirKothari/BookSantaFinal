import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyB8PTCpcPTkPq65NNUTgNJV3Puo5sABHEQ",
    authDomain: "book-santa-5c710.firebaseapp.com",
    projectId: "book-santa-5c710",
    storageBucket: "book-santa-5c710.appspot.com",
    messagingSenderId: "1023551674880",
    appId: "1:1023551674880:web:27ef6b1d0a8925c35116e5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()