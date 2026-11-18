// Firebase web app config. These values are public by design; the database security rules protect the data.
export const firebaseConfig = {
  apiKey: "AIzaSyCYiktPdEDCBzP-ERXXoicmurZ9Lycb8oc",
  authDomain: "walkie-talkie-a5a88.firebaseapp.com",
  databaseURL: "https://walkie-talkie-a5a88-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "walkie-talkie-a5a88",
  appId: "1:508776519810:web:3338862fadebb314d33c9b"
};

// STUN works for most WiFi/home networks. Add a TURN server below if phones on
// different mobile carriers cannot connect.
export const iceServers = [
  { urls: "stun:stun.l.google.com:19302" },
  { urls: "stun:stun1.l.google.com:19302" }
  // { urls: "turn:YOUR_TURN_HOST:443?transport=tcp", username: "YOUR_USER", credential: "YOUR_PASS" },
];
