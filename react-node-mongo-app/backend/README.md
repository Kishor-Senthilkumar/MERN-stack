# Backend API Documentation

## Overview
This backend application is built using Node.js and Express, and it connects to a MongoDB database to manage member data for a team. It provides a RESTful API for creating, retrieving, and managing members.

## Setup Instructions

1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd react-node-mongo-app/backend
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root of the backend directory and add the following:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   PORT=5000
   ```

4. **Run the Server**
   ```
   npm start
   ```

## API Endpoints

### Members

- **Create Member**
  - **POST** `/api/members`
  - Request Body: `{ "name": "string", "role": "string", "email": "string", "profileImage": "string" }`
  - Description: Adds a new member to the database.

- **Get All Members**
  - **GET** `/api/members`
  - Description: Retrieves a list of all members.

- **Get Member by ID**
  - **GET** `/api/members/:id`
  - Description: Retrieves details of a specific member by their ID.

## Technologies Used
- Node.js
- Express
- MongoDB (with Mongoose)
- CORS
- dotenv

## License
This project is licensed under the MIT License.