import firebase from 'firebase/compat/app'

const config = {
  apiKey: "AIzaSyB70dgqjtAzELoxh6h7aCRzxHKwsFHobs8",
  authDomain: "to-do-81be3.firebaseapp.com",
  projectId: "to-do-81be3",
  storageBucket: "to-do-81be3.appspot.com",
  messagingSenderId: "315198946245",
  appId: "1:315198946245:web:b6475e3cda3888dc1929ac"
};

let db = firebase.initializeApp(config);

export default db 