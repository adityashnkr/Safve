  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtLsqbWl6gh1v_PFmEHLRbPW3RngQNHvU",
    authDomain: "haxx-ae9c1.firebaseapp.com",
    projectId: "haxx-ae9c1",
    storageBucket: "haxx-ae9c1.appspot.com",
    messagingSenderId: "129418510868",
    appId: "1:129418510868:web:d041a2e561d4a36a6ddd01",
    measurementId: "G-7W04VCV7E4"
  
  });
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export { db, auth };
  