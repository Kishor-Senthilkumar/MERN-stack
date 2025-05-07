# React Node Mongo App

This project is a full-stack application built with React.js for the frontend and Node.js with Express for the backend, utilizing MongoDB as the database. The application allows users to manage team members, including adding new members, viewing all members, and viewing details of individual members.


## Installation

### Backend

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the backend server:
   ```
   npm start
   ```

### Frontend

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React application:
   ```
   npm start
   ```

## API Endpoints

- **POST /api/members**: Create a new member.
- **GET /api/members**: Retrieve all members.
- **GET /api/members/:id**: Retrieve a member by ID.

## Features

- Home page with navigation links.
- Add Member page with a form to submit member details.
- View Members page displaying a list of all members.
- Member Details page showing detailed information for a selected member.

## Technologies Used

- React.js
- Node.js
- Express
- MongoDB
- Mongoose
- Axios
- React Router

## License

This project is licensed under the MIT License.
