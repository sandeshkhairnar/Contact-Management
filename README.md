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

```bash
contact-management/
├── client/                
│   ├── public/             
│   └── src/
│       ├── components/     
│       ├── services/       
│       ├── App.jsx         
│       └── index.js        
└── server/                 
    ├── config/             
    ├── controllers/        
    ├── models/            
    ├── routes/            
    └── server.js          
```
## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (v4.4 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

### Installation Steps

1. Clone the repository:

    ```bash
    git clone git@github.com:sandeshkhairnar/contact-management.git
    cd contact-management
    ```

2. Install dependencies for both the frontend and backend:

    ```bash
    npm run install-all
    ```

3. Set up environment variables:

    - Create a `.env` file in the `server` directory:

        ```
        PORT=5000
        MONGODB_URI=mongodb://localhost:27017/contact_management
        ```

    - Create a `.env` file in the `client` directory:

        ```
        REACT_APP_API_URL=http://localhost:5000/api
        ```

4. Initialize the database:

    - Start MongoDB service:

        ```bash
        mongod
        ```

    - Create the database:

        ```bash
        mongo
        use contact_management
        ```

5. Start the application:

    ```bash
    # From the root directory
    npm start
    ```

    The application will be available at:
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend API: [http://localhost:5000](http://localhost:5000)
## 📋 API Endpoints

### Contacts
- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/:id` - Get a specific contact
- `POST /api/contacts` - Create a new contact
- `PUT /api/contacts/:id` - Update an existing contact
- `DELETE /api/contacts/:id` - Delete a contact

## 💡 Development Notes

### Code Organization
- **Components** are organized by feature in the `components` folder.
- **API Calls** are centralized in the `services` directory.
- **Backend routes** follow RESTful conventions.

### State Management
- **React Hooks** (`useState`, `useEffect`) for managing state.
- **Axios** for handling API requests.

### Styling
- **Tailwind CSS** for modern, responsive UI.
- **Responsive Design** with mobile-first principles.

## ⚠️ Error Handling

### Frontend
- **Real-time form validation** with descriptive error messages.
- **Error boundaries** and **try-catch** blocks for reliable UI.

### Backend
- **Input validation** using **express-validator**.
- **Centralized error middleware** for consistent error responses.
- **Robust try-catch** blocks for async operations.

