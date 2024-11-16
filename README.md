# Contact Management System

A full-stack web application for managing contacts with CRUD operations, built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🚀 Features

- **Create, Read, Update, and Delete Contacts**: Perform full CRUD operations on contacts.
- **Responsive Design**: A modern, responsive user interface built with Tailwind CSS.
- **Real-Time Form Validation**: Instant feedback on user input to ensure data quality.
- **Sortable Contact List**: Easily sort contacts by name, email, or other attributes.
- **Search Functionality**: Quickly find contacts using the search bar.
- **Secure API Endpoints**: Protected backend routes with proper error handling.

## 🛠️ Tech Stack

### Frontend
- **React.js** with Hooks for efficient state management
- **Axios** for making API calls
- **React Table** for displaying contact lists
- **Tailwind CSS** for utility-first, responsive styling

### Backend
- **Node.js** with **Express.js** for building the server
- **MongoDB** with **Mongoose** ODM for the database
- **Express Validator** for input validation
- **REST API** architecture for structured endpoints

## 🗂️ Project Structure
'''bash
contact-management/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/
│       ├── components/    # React components
│       ├── services/      # API service layer
│       ├── App.jsx        # Main application component
│       └── index.js       # Application entry point
└── server/                # Backend Node.js application
    ├── config/            # Configuration files
    ├── controllers/       # Request handlers
    ├── models/            # Database models
    ├── routes/            # API routes
    └── server.js          # Server entry point


    
