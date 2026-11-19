# walkie-talkie-web

Push-to-talk walkie-talkie in the browser with rooms.
One person creates a room (name + passcode); friends join with the same name + passcode.
Audio goes directly between devices (WebRTC). Firebase is only used for rooms, sign-in and matchmaking.

## Files
- `index.html`: the whole app
- `config.js`: Firebase keys (public values) + STUN/TURN servers
- `database.rules.json`: security rules (paste into Firebase console > Realtime Database > Rules)
- `vercel.json`: allows the microphone

## Setup
1. Firebase console: create a project.
2. Authentication > Sign-in method > enable **Anonymous**.
3. Realtime Database > Create database (locked mode) > Rules tab > paste `database.rules.json` > Publish.
4. Project settings > Your apps > Web `</>` > copy the config into `config.js`.
5. Vercel: import this repo and deploy (no settings).
6. Firebase > Authentication > Settings > Authorized domains > add your Vercel domain.

## Notes
- Microphone needs https (Vercel provides it).
- Phones on different mobile carriers may need a TURN server (see `config.js`).
- Built for small groups (about 2 to 8 people).

## License

Copyright (c) 2026 Vansh. All rights reserved. See [LICENSE](LICENSE).
