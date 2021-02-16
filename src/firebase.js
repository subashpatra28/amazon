import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCf0oZCafsVLKDbCsb7lor0-pRxCeaYRKc",
    authDomain: "fir-8bd62.firebaseapp.com",
    projectId: "fir-8bd62",
    storageBucket: "fir-8bd62.appspot.com",
    messagingSenderId: "122418722010",
    appId: "1:122418722010:web:897333c82a87498c44e1e3",
    measurementId: "G-FVQBFBD0L0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };