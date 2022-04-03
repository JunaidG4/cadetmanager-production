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
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};


const app = initializeApp(clientCredentials)

export const db = getFirestore()
export const colRef = collection(db, 'cadets')
export const eventRef = collection(db, 'events')
export const staffRef = collection(db, 'staff')
export const auth = getAuth(app)

export default function firebaseInit() {
  if (!getApps().length) {
    
    //initilise firebase
    initializeApp(clientCredentials);

  }
  console.log('Successful Init');
}
