# Ken Casulla — Portfolio

A minimalist full-stack developer portfolio showcasing modern React UI, reusable components, and backend API integration. The site highlights interactive demo projects, responsive layouts, and authentication flows while keeping the design monochrome and polished.

## What’s Included

- Portfolio landing experience with a hero section, about section, and featured work
- Interactive project showcase with modal demos for Calculator, Weather App, and Auth System
- Keyboard-enabled calculator built with React and mathjs
- Weather app that fetches live data through an Express backend and OpenWeatherMap API
- Full-stack authentication demo with registration, login, JWT tokens, bcrypt hashing, and MongoDB storage
- External blog project link for additional full-stack work

## Features

- Responsive UI optimized for desktop and mobile
- Clean black-and-white design with subtle hover and transition effects
- Modular React component structure
- Backend Express API with secure auth and weather routes
- MongoDB integration using Mongoose
- Environment-driven configuration for API keys and secrets

## Project Structure

```
portfolio/
├── Dockerfile
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── assets/
│   └── components/
│       ├── AboutMe.jsx
│       ├── AuthPage.jsx
│       ├── Calculator.jsx
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├── Modal.jsx
│       ├── NavBar.jsx
│       ├── Projects.jsx
│       └── Weather.jsx
└── server/
    ├── server.js
    ├── package.json
    ├── .env
    └── models/
        └── User.js
```

## Tech Stack

- Frontend: React 18, Vite, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB, Mongoose
- Authentication: JWT, bcrypt
- API Integration: OpenWeatherMap API
- Utilities: mathjs

## Local Setup

### 1. Install frontend dependencies

```bash
npm install
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Configure environment variables

Create a `.env` file in `server/` with the following values:

```env
MONGO_URI=your_mongo_connection_string
WEATHER_API_KEY=your_openweathermap_api_key
JWT_SECRET=your_jwt_secret
```

### 4. Run the frontend and backend

In the root folder:

```bash
npm run dev
```

In the `server/` folder:

```bash
npm run dev
```

The frontend runs on Vite, and the backend server listens on port `3000` by default.

## Running with Docker

Build the image:

```bash
docker build -t portfolio .
```

Run the container:

```bash
docker run -p 80:80 portfolio
```

## Notes

- The Weather App uses the backend route at `/weather?city=` to request OpenWeatherMap data.
- The Auth System demo sends login/register requests to `http://localhost:3000/login` and `http://localhost:3000/register`.
- A linked external blog project is included in the featured work section.

## Learnings

This portfolio project demonstrates:

- building reusable React components
- creating a polished responsive user interface
- connecting frontend apps with a backend API
- implementing authentication and secure password handling
- working with external REST APIs
- organizing a full-stack project for real-world deployment
