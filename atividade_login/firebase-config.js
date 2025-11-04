import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfCniRBiuV6jDc1Z_KWdKMU1yuugjfR4I",
  authDomain: "aulao2910.firebaseapp.com",
  projectId: "aulao2910",
  storageBucket: "aulao2910.firebasestorage.app",
  messagingSenderId: "942745239707",
  appId: "1:942745239707:web:0b7a177f4453e9845ac63e",
  measurementId: "G-6JLQ4HMXVJ"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);