# FarmBridge-web (Demo)

This is a frontend-only demo of the *FarmBridge AI* web application. It focuses on the core flows:
- Farmer posting listings
- AI-based price prediction (mock)
- Buyer matching (mock)
- Transport booking simulation (mock)

This project intentionally uses mock data and functions to simulate AI features so it can run in Bolt/new or locally without server dependencies.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:5173
```

## Features included (mock):
- Price prediction (simple deterministic function)
- Buyer matching (based on demand and location)
- Transport price quoting
- Simple UI for farmer/buyer flows

## Notes:
- This is a demo for quick testing and UX verification. Replace `mockApi.js` with real backend endpoints and AI services when ready.
