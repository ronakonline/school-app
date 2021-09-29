import * as firebase from 'firebase';
import '@firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBs1ykoss7s0jPDb8IHi3ogGjaVqyd_pPk",
    authDomain: "school-app-e39a1.firebaseapp.com",
    projectId: "school-app-e39a1",
    storageBucket: "school-app-e39a1.appspot.com",
    messagingSenderId: "97058994970",
    appId: "1:97058994970:web:0ca0f012f3a6af3c8b0aa3",
    measurementId: "G-PM5N7VFVCQ"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;