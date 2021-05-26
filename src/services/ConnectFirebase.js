import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
        apiKey: "AIzaSyCIFPtqvyBhptkOPbW8iI_UdnSC7re0lSA",
        authDomain: "marcaponto-33ab3.firebaseapp.com",
        projectId: "marcaponto-33ab3",
        storageBucket: "marcaponto-33ab3.appspot.com",
        messagingSenderId: "895892914320",
        appId: "1:895892914320:web:17141d5e5be2e472fc5815"
};

const firebaseApp =
    !firebase.apps.length ?
        firebase.initializeApp(firebaseConfig) :
        firebase.app();

const db = firebaseApp.firestore()
export default db;



