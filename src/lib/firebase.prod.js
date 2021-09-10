import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDMMmIpoblsUkqAnvvAQc2SP-y7Yq7e2ms',
  authDomain: 'netflix-a34e7.firebaseapp.com',
  projectId: 'netflix-a34e7',
  storageBucket: 'netflix-a34e7.appspot.com',
  messagingSenderId: '383905196367',
  appId: '1:383905196367:web:9494fee3d2bfb5c99cfd3a',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
