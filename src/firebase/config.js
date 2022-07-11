import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCegHDZIB7hd6322_K-urc39KrhN4HBgh8',
  authDomain: 'cooking-ninja-site-f2545.firebaseapp.com',
  projectId: 'cooking-ninja-site-f2545',
  storageBucket: 'cooking-ninja-site-f2545.appspot.com',
  messagingSenderId: '146786914492',
  appId: '1:146786914492:web:6123aec1259459f98740b9',
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
