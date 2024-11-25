# Coda: Modern Music Streaming Platform

Coda is a music streaming platform designed to provide a seamless experience for both artists and listeners.

## About

Coda aims to create an engaging platform for music enthusiasts while providing artists with tools to share their work effectively.

## Tech Stack

- Frontend: React.js with Tailwind CSS for responsive design
- Backend: Node.js and Express.js
- Database: MongoDB
- Full Stack: MERN (MongoDB, Express, React, Node.js)
- Authentication: bcrypt for password hashing, JWT for user sessions
- File Storage: Amazon S3 for music file storage
- Streaming: Integration with S3 for music streaming
- API: RESTful API for backend communication

## Current Features

- User registration and login with secure password hashing (bcrypt)
- Artist profiles and listener accounts
- Music upload for artists (stored in S3 buckets)
- Streaming playback from S3 storage
- Basic fuzzy search functionality for tracks, artists, and playlists

## How It Works

### User Authentication:
- Users register with email and password
- Passwords are hashed using bcrypt before storage
- JWT is used for maintaining user sessions

### Music Upload (Artists):
- Artists can upload music files through the platform
- Files are securely stored in Amazon S3 buckets

### Music Streaming:
- When a user plays a track, it's streamed directly from the S3 bucket
