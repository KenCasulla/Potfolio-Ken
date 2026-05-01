# Ken Casulla — Portfolio

A minimal, black & white developer portfolio built with React, Tailwind CSS, and Node.js/Express.

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
│
├── src/
│   ├── main.jsx              # App entry point
│   ├── App.jsx               # Root component
│   ├── index.css             # Global styles + Tailwind
│   │
│   ├── assets/               # Images (profile.jpg, weather.jpg)
│   │
│   └── components/
│       ├── NavBar.jsx
│       ├── Hero.jsx
│       ├── AboutMe.jsx
│       ├── Projects.jsx      # Project grid + modals
│       ├── Calculator.jsx
│       ├── Weather.jsx
│       ├── AuthPage.jsx
│       ├── Modal.jsx
│       └── Footer.jsx
│
└── server/
    ├── server.js             # Express API
    ├── package.json
    ├── .env.example          # Copy to .env and fill in values
    └── models/
        └── User.js           # Mongoose user schema
```

## Setup

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
cp .env.example .env
# Fill in MONGO_URI, WEATHER_API_KEY, JWT_SECRET
npm run dev
```

## Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB + Mongoose
- **Auth:** JWT + bcrypt
- **Weather:** OpenWeatherMap API
