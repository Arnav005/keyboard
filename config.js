import * as firebase from "firebase"
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD0wwoL4HaINvfZ9tYlToZ2oy2FfvAe2Zg",
    authDomain: "willy-18235.firebaseapp.com",
    projectId: "willy-18235",
    storageBucket: "willy-18235.appspot.com",
    messagingSenderId: "436078004118",
    appId: "1:436078004118:web:a22ab4a22ddddcd4a7bfb7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firbase.firestore();
  