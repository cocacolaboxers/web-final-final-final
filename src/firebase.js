import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDWbvcwU2h3TrNc9K-BSYNlAx7RTaOv-ZE",
    authDomain: "web-force-2.firebaseapp.com",
    databaseURL: "https://web-force-2.firebaseio.com",
    projectId: "web-force-2",
    storageBucket: "web-force-2.appspot.com",
    messagingSenderId: "280001969783",
    appId: "1:280001969783:web:3b52cd63f69a73e8afd072"
  };
  // Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();