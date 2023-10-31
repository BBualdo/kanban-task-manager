import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAT93IMtTeMFtghuU8xN-gDEMdzG5GDveA",
  authDomain: "kanban-task-manager-75493.firebaseapp.com",
  projectId: "kanban-task-manager-75493",
  storageBucket: "kanban-task-manager-75493.appspot.com",
  messagingSenderId: "557777959386",
  appId: "1:557777959386:web:aaabf34d1eb61f99f6a8e3",
  measurementId: "G-Y12F3EPYS3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
