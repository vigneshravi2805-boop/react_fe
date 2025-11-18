# React Frontend Application

A sample React frontend application built with Vite.

## Features

- ⚡ Fast development with Vite
- ⚛️ React 18
- 🎨 Modern UI with CSS
- 🖼️ Sample image display
- 📦 Builds to `dist` folder

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system.
- Download Node.js from: https://nodejs.org/ (includes npm)

### Installation

1. Open your terminal/command prompt in the `react-fe` folder
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

**The browser will automatically open** showing your React app at `http://localhost:5173`

If the browser doesn't open automatically, manually visit:
- `http://localhost:5173`

You should see:
- React logo (spinning)
- Counter button
- Sample image displayed below

### Build

Build the application for production:

```bash
npm run build
```

This will create a `dist` folder with the production-ready files.

### Preview Production Build

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
react-fe/
├── public/
│   ├── react.svg          # React logo
│   └── sample-image.jpg   # Sample image (SVG format)
├── src/
│   ├── App.jsx            # Main App component
│   ├── App.css            # App styles
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies and scripts
```

## Notes

- The sample image is displayed in the browser when you run the app
- Running `npm run build` creates a `dist` folder with optimized production files
- The app includes a sample counter component and image display

