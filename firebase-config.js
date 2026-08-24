// ==========================================================
// حط هنا الإعدادات اللي هتاخدها من Firebase Console:
// Project settings (⚙️) -> Your apps -> Web app -> SDK setup and configuration
// ==========================================================
const firebaseConfig = {
  apiKey: "PASTE_API_KEY_HERE",
  authDomain: "PASTE_AUTH_DOMAIN_HERE",
  projectId: "PASTE_PROJECT_ID_HERE",
  storageBucket: "PASTE_STORAGE_BUCKET_HERE",
  messagingSenderId: "PASTE_SENDER_ID_HERE",
  appId: "PASTE_APP_ID_HERE"
};

firebase.initializeApp(firebaseConfig);
