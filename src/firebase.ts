import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDt1SB31GFTGcATROlBfvCghrsb_YiABM0",
    authDomain: "todo-list-demo-eb426.firebaseapp.com",
    projectId: "todo-list-demo-eb426",
    storageBucket: "todo-list-demo-eb426.appspot.com",
    messagingSenderId: "706738210012",
    appId: "1:706738210012:web:9d10b1615cdda14fe12019"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();