import { 
  initializeApp, 
  getApps 
} from 'firebase/app';

import { 
  collection, getFirestore, getDocs,
  addDoc 
} from 'firebase/firestore';

import {
  getAuth,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth'

const clientCredentials = {
  apiKey: "AIzaSyD2QH6tuKo7XeuqipTtmxXrQ0xL2BFsoxI",
  authDomain: "nextjs-cadetmanagementsystem.firebaseapp.com",
  databaseURL: "https://nextjs-cadetmanagementsystem-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nextjs-cadetmanagementsystem",
  storageBucket: "nextjs-cadetmanagementsystem.appspot.com",
  messagingSenderId: "820280098629",
  appId: "1:820280098629:web:6efa8d39bdba39e410482c"
};


const app = initializeApp(clientCredentials)

export const db = getFirestore()
export const colRef = collection(db, 'cadets')
export const eventRef = collection(db, 'events')
export const auth = getAuth(app)

export default function firebaseInit() {
  if (!getApps().length) {
    
    //initilise firebase
    initializeApp(clientCredentials);

  }
  console.log('Successful Init');
}
