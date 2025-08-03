# Blogify

A modern, full-stack blogging platform built with React, Node.js, Express, and MongoDB.

## Features

- 📝 Create, edit, and delete blog posts
- 🔍 Search and filter posts by category, popularity, or recency
- 💬 Comment on posts and interact with other users
- 🌟 Feature and save posts
- 📱 Responsive design for all devices
- 🔒 Authentication with Clerk

## Tech Stack

- **Frontend:** React, Tailwind CSS, React Router, React Query
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** Clerk
- **Other:** Axios, Timeago.js

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Pawan-kumar47129/Blogify
   cd blogapp
   ```

2. **Install dependencies:**
   ```bash
   # For backend
   cd backend
   npm install

   # For frontend
   cd ../frontend
   npm install
   ```

3. **Set up environment variables:**

   - Copy the example environment files and rename them:
     ```bash
     # For backend
     cd backend
     cp .env.example .env

     # For frontend
     cd ../frontend
     cp .env.example .env
     ```
   - Open each `.env` file and fill in the required values as described in the comments or placeholder titles.

4. **Run the app:**
   ```bash
   # Start backend
   cd backend
   npm run dev

   # Start frontend (in a new terminal)
   cd ../frontend
   npm run dev
   ```

5. **Visit:**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Folder Structure

```
docker-project/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── routes/
│   │   └── ...
│   └── ...
└── readme
```
