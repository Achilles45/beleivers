import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3Ov1QzXxYOWNUSYai05bwNW-4b-AzzI8",
  authDomain: "believers-earners.firebaseapp.com",
  databaseURL: "https://believers-earners.firebaseio.com",
  projectId: "believers-earners",
  storageBucket: "believers-earners.appspot.com",
  messagingSenderId: "840293443614",
  appId: "1:840293443614:web:e7b903c79a4eff1fede60f",
  measurementId: "G-0SJEZ5ZB9S"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();