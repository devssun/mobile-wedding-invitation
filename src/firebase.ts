import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
    apiKey: "AIzaSyCOnNVRsy5s4z02ni9Bp3ZY6q5B-o2llqY",
    authDomain: "mobile-wedding-invitatio-ace7e.firebaseapp.com",
    projectId: "mobile-wedding-invitatio-ace7e",
    storageBucket: "mobile-wedding-invitatio-ace7e.appspot.com",
    messagingSenderId: "572176533615",
    appId: "1:572176533615:web:035dc6e73aebb13943a59a",
    measurementId: "G-6KJJNSMJQY"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
export const analytics = getAnalytics(firebaseApp);
