import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = firebase.initializeApp(firebaseConfig);

const firestore = app.firestore();
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: (doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};
export const storage = app.storage();
export const auth = app.auth();
export default app;
