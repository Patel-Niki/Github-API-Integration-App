# GitHub API Integration App

This is a web application that integrates with the GitHub API, built using **Vue.js** on the frontend and **Node.js with Express** on the backend. The app allows users to fetch and display GitHub user profiles and repositories.

## Features

- Fetch and display GitHub user profile information (avatar, name, bio).
- Fetch and display the repositories of a given GitHub user.
- Built with **Vue.js** (frontend) and **Node.js/Express** (backend).
- Integrated with **GitHub API** to retrieve user data.

## Project Structure

The project is divided into two main parts:

- **Client** (Vue.js and Vite)
  - Frontend that communicates with the backend API to fetch user data and repositories.
  - Tailwind CSS for styling.

- **Server** (Node.js and Express)
  - Backend API that interacts with the GitHub API to fetch user data and repositories.

## Technologies Used

- **Vue.js** - JavaScript framework for building the frontend.
- **Node.js** - JavaScript runtime for the backend.
- **Express** - Web framework for Node.js.
- **GitHub API** - Used for fetching user profile and repository information.
- **Vite** - Build tool for the Vue.js frontend.
- **Tailwind CSS** - Utility-first CSS framework for styling.

## Installation

### Prerequisites

- Node.js (v14 or higher) installed.
- npm (Node Package Manager) installed.

### Steps

#### 1. Clone the repository

```bash
git clone https://github.com/Patel-Niki/github-api-integration-app.git
cd github-api-integration-app 
```

#### 2. Install dependencies

- For the backend (Node.js/Express):
- Navigate to the backend directory and install dependencies.

```bash
cd server
npm install
```

- For the frontend (Vue.js and Vite):
- Navigate to the frontend directory and install dependencies.
```bash

cd client
npm install
```

#### 3. Set up environment variables
- Create a .env file in the backend folder (server/) and add your GitHub API credentials if necessary.
- For basic requests, no authentication is needed, but for more advanced requests, you might need a Personal Access Token from GitHub.

#### 4. Run the application
- Start the backend server:

```bash
cd server
npm start
```
- This will start the server on port 5001 by default.
- To change the port, modify the server.ts file

- Start the frontend server:

```bash
cd client
npm run dev
```
- This will start the Vite development server on port 3000.
- To change the port, modify the vite.config.ts file or use the --port flag:

```bash
vite --port your_desired_port
```

- Visit http://localhost:3000 in your browser to access the app.