// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwkGHEGoohv3M0TJgq_S8JmN9rox24dMc",
  authDomain: "tution-provider.firebaseapp.com",
  projectId: "tution-provider",
  storageBucket: "tution-provider.appspot.com",
  messagingSenderId: "800057992390",
  appId: "1:800057992390:web:0f2045ed63b0e01a7063c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
