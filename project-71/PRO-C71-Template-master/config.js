import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCgUr2ubLI0l2a7MQcQvh2O8ztvY-OkiKk",
    authDomain: "c-71-46ab0.firebaseapp.com",
    projectId: "c-71-46ab0",
    storageBucket: "c-71-46ab0.appspot.com",
    messagingSenderId: "408235655175",
    appId: "1:408235655175:web:b994de0937523ff3ef2aa2"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
