import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAlAsNQj1eJsF5kpVH8I7ofG81IRPj_DQw",
  authDomain: "crown-db-ed788.firebaseapp.com",
  projectId: "crown-db-ed788",
  storageBucket: "crown-db-ed788.appspot.com",
  messagingSenderId: "837837007662",
  appId: "1:837837007662:web:31d8c7cb99c6a3a238e8bf",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc("users/dgsdfgsdfgs");
  // console.log(firestore.doc("users/dgsdfgsdfgs"));
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestory = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
