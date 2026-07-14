# MERN User Management System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) CRUD application that allows users to create, view, update, and delete user records. The project follows an industry-standard folder structure with a separate backend and frontend.

## Features

* Create a new user
* View all users
* Update existing user information
* Delete users
* MongoDB Atlas cloud database
* RESTful API using Express.js
* React frontend with Axios
* Modular and scalable project structure

## Tech Stack

### Frontend

* React.js
* Vite
* Axios

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* CORS
* dotenv

## Project Structure

```text
mern-user-management/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    ├── public/
    ├── package.json
    └── vite.config.js
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/MuhammadMuzammilkhan/mern-user-management.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/users     | Get all users |
| POST   | /api/users     | Create a user |
| PUT    | /api/users/:id | Update a user |
| DELETE | /api/users/:id | Delete a user |

## Learning Outcomes

This project demonstrates:

* REST API development
* React state management
* Axios API integration
* MongoDB CRUD operations
* Express routing
* Mongoose models
* Component-based architecture
* Full-stack MERN development

## Author

**Muhammad Muzammil Khan**

* GitHub: https://github.com/MuhammadMuzammilkhan

## License

This project is created for learning and educational purposes.
