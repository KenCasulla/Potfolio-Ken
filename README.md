# Ken Casulla — Portfolio

A modern black-and-white full stack developer portfolio built with React, Tailwind CSS, Node.js, and Express. This project showcases my frontend and backend development skills through interactive applications, responsive UI design, authentication systems, and API integration.

The portfolio is designed with a minimalist aesthetic focused on clean typography, smooth user experience, and responsive layouts across desktop and mobile devices.


# Features

Responsive modern UI built with React and Tailwind CSS

Minimal black-and-white design with smooth layout structure

Dynamic project showcase with reusable modal components
User authentication system using JWT and bcrypt
Weather application integrated with external API data
Interactive calculator application
Backend API powered by Express and MongoDB
Secure user data handling with Mongoose schemas
Component-based architecture for maintainability and scalability

# Project Purpose

This portfolio was created to demonstrate:

Frontend development skills using React and Tailwind CSS
Backend API development with Node.js and Express
Authentication and database integration using MongoDB
Clean component architecture and reusable UI patterns
Ability to build full stack applications from scratch

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


# Technologies Used

# Frontend
React 18
Vite
Tailwind CSS

# Backend
Node.js
Express.js

# Database
MongoDB
Mongoose

# Authentication
JWT (JSON Web Token)
bcrypt password hashing

# External APIs
OpenWeatherMap API

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

# Key Learning Outcomes

Through building this project, I improved my understanding of:

React component architecture
State management and props handling
REST API development
Authentication workflows
MongoDB database integration
Responsive web design
Secure backend practices
API consumption and asynchronous data fetching
