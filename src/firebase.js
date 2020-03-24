import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBJLz0-o4iPD0PdTpU4oIPpYIHsXNHph1M',
  authDomain: 'swn-comm.firebaseapp.com',
  databaseURL: 'https://swn-comm.firebaseio.com',
  projectId: 'swn-comm',
  storageBucket: 'swn-comm.appspot.com',
  messagingSenderId: '435326617018',
  appId: '1:435326617018:web:57a9c220505a1061674983'
};

firebase.initializeApp(config);

export const db = firebase.firestore();
