// Paste your Firebase web app config here (Firebase console > Project settings > Your apps).
// These values are public by design; the security rules protect the data.
export const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  databaseURL: "PASTE_DATABASE_URL",
  projectId: "PASTE_PROJECT_ID",
  appId: "PASTE_APP_ID"
};

// STUN works for most WiFi/home networks. Add a TURN server below if phones on
// different mobile carriers cannot connect.
export const iceServers = [
  { urls: "stun:stun.l.google.com:19302" },
  { urls: "stun:stun1.l.google.com:19302" }
  // { urls: "turn:YOUR_TURN_HOST:443?transport=tcp", username: "YOUR_USER", credential: "YOUR_PASS" },
];
