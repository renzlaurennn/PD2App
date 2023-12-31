import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

// Your web app's Firebase configuration
export const firebaseApp = initializeApp({
  apiKey: "AIzaSyD15aHe9nyzRZxyxXvyuGizy4wZxXTcMXs",
  authDomain: "bikebox-app.firebaseapp.com",
  databaseURL: "https://bikebox-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bikebox-app",
  storageBucket: "bikebox-app.appspot.com",
  messagingSenderId: "1080815309670",
  appId: "1:1080815309670:web:16ead4e6602816cf3d2ea7"
});

// Initialize Firebase
// const db = getDatabase(app);

// export { db, firebaseConfig };