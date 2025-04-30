# React Node Mongo App

This project is a full-stack application built with React for the frontend, Node.js for the backend, and MongoDB for the database. It allows users to manage team members, including adding new members, viewing all members, and viewing details of individual members.

## Project Structure

```
react-node-mongo-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   └── server.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── App.js
│   │   ├── index.js
│   │   └── routes
│   ├── package.json
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd react-node-mongo-app
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Set up your MongoDB connection in a `.env` file:
   ```
   MONGODB_URI=<your-mongodb-uri>
   ```

4. Start the backend server:
   ```
   npm start
   ```

5. In a new terminal, navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

6. Start the React application:
   ```
   npm start
   ```

### API Endpoints

- `POST /api/members` - Create a new member
- `GET /api/members` - Retrieve all members
- `GET /api/members/:id` - Retrieve a member by ID

### Features

- Home Page: Displays a welcome message and navigation links.
- Add Member: Form to add a new member to the team.
- View Members: List of all team members with links to their details.
- Member Details: Displays detailed information about a specific member.

### Technologies Used

- React
- Node.js
- Express
- MongoDB
- Mongoose
- Axios
- React Router

## License

This project is licensed under the MIT License.