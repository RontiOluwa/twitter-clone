import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5-FvyHa5tJr3CQtFi3W0Udse6XByW90Y",
  authDomain: "twitter-clone-7aca6.firebaseapp.com",
  databaseURL: "https://twitter-clone-7aca6.firebaseio.com",
  projectId: "twitter-clone-7aca6",
  storageBucket: "twitter-clone-7aca6.appspot.com",
  messagingSenderId: "843979991400",
  appId: "1:843979991400:web:b73e5e116aabd1c7f80edd",
  measurementId: "G-LV4DN6HWVD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
