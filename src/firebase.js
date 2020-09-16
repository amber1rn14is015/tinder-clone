import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAkzlp_7K_2NStv1a3Mm8uAxyrpz5w1Cbk",
    authDomain: "tinder-clone-faab3.firebaseapp.com",
    databaseURL: "https://tinder-clone-faab3.firebaseio.com",
    projectId: "tinder-clone-faab3",
    storageBucket: "tinder-clone-faab3.appspot.com",
    messagingSenderId: "207578260920",
    appId: "1:207578260920:web:ee99b1f840c36087169b4d",
    measurementId: "G-5Y3YLF5M72"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const database = firebaseApp.firestore()

  export default database