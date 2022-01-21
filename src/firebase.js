import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyB66BMy70rtGyjv3jSkNqhm5cS8JKNM_mc",
    authDomain: "messenger-clone-828b2.firebaseapp.com",
    projectId: "messenger-clone-828b2",
    storageBucket: "messenger-clone-828b2.appspot.com",
    messagingSenderId: "306045960813",
    appId: "1:306045960813:web:0add7c7dfcc79b8baef564",
  })
  .auth();
