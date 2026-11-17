# walkie-talkie-web

Push-to-talk walkie-talkie in the browser. Enter a group name + passcode, hold the button to talk.
Audio goes directly between devices (WebRTC); no backend or accounts needed.

## Deploy (Vercel)
1. Vercel > Add New > Project > import this repo.
2. Leave all settings as default (no build step) and press Deploy.
3. Open the https link on two phones, use the same group name + passcode.

## Notes
- Microphone only works over https (Vercel gives you this).
- Phones on different mobile carriers may need a TURN server to connect.
- Built for small groups (about 2 to 8 people).
