import firebase from 'firebase';

firebase.initializeApp( {
    apiKey: "AIzaSyBj1-lxJiMIizOIeXo_7P7ADKPkLYEB4TU",
    authDomain: "clone-4ce19.firebaseapp.com",
    databaseURL: "https://clone-4ce19.firebaseio.com",
    projectId: "clone-4ce19",
    storageBucket: "clone-4ce19.appspot.com",
    messagingSenderId: "437855005187",
    appId: "1:437855005187:web:334e598f8b46076d4ebc36",
    measurementId: "G-F64HW6B48W"
})


const auth = firebase.auth();

export { auth};