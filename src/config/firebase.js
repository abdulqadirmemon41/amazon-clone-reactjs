// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyAaRE4McFfddIR0a64S6I1K_SfqniRseGA",
  authDomain: "clone-byabdulqadir.firebaseapp.com",
  databaseURL: "https://clone-byabdulqadir.firebaseio.com",
  projectId: "clone-byabdulqadir",
  storageBucket: "clone-byabdulqadir.appspot.com",
  messagingSenderId: "304366987383",
  appId: "1:304366987383:web:9f2da5a438929ec153be72",
  measurementId: "G-32MCNP6ZSE"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();


export {auth}