import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyAS7eTdmQlge08BAlL36gNYfNwmCfV98Lg',
  authDomain: 'psychologists-2c0a0.firebaseapp.com',
  databaseURL:
    'https://psychologists-2c0a0-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'psychologists-2c0a0',
  storageBucket: 'psychologists-2c0a0.appspot.com',
  messagingSenderId: '150112264109',
  appId: '1:150112264109:web:1d213fe12f8c059ab44b24',
  measurementId: 'G-ZVL0HCJ0K8',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
