// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD9Q9AuTJGRwhZN_YIgdAm7aA9ev4-784w",
  authDomain: "osp-project-6d1d7.firebaseapp.com",
  projectId: "osp-project-6d1d7",
  storageBucket: "osp-project-6d1d7.appspot.com",
  messagingSenderId: "634800803944",
  appId: "1:634800803944:web:1563acf31df05a22476bdd",
  measurementId: "G-QYK9EMEYRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);