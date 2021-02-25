import firebase  from 'firebase/app';
import "@firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDCp4gG8j9OYk05-pby3b2RV7Npx1oSmsQ",
    authDomain: "tiendamusica-react.firebaseapp.com",
    projectId: "tiendamusica-react",
    storageBucket: "tiendamusica-react.appspot.com",
    messagingSenderId: "697479817090",
    appId: "1:697479817090:web:8eae1edbcdb1893adf119b",
    measurementId: "G-ZZTLYY5F7H"
  });
  // Initialize Firebase

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    firebase.analytics();
    return firebase.firestore(app)
}
  
  