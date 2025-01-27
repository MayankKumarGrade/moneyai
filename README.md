# Fintech Dashboard Project

## Description
This is a fintech dashboard built using React.js for the frontend, Express and Node.js for the backend, and MongoDB Atlas for storage. The application uses dummy data to showcase financial data management, such as transaction tracking and user management.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS 3.4.1
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **UI Framework**: Tailwind CSS
- **Other Tools**: Axios, dotenv

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas)
- Git (optional, for cloning the repository)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fintech-dashboard.git
   cd fintech-dashboard
   ```

2. Set up the backend:
   - Create a `.env` file for environment variables:
     ```plaintext
     MONGODB_URI=your_mongodb_connection_string
     PORT=5000
     ```

   - Install backend dependencies:
     ```bash
     npm install
     ```

   - Start the backend:
     ```bash
     npm run dev
     ```

3. Set up the frontend:
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```

   - Install frontend dependencies:
     ```bash
     npm install
     ```

   - Start the frontend:
     ```bash
     npm run dev
     ```

4. Visit `http://localhost:5000` to view the backend and Visit `http://localhost:5173` to view the dashbaord.

## Features
- **Dashboard View**: Displays user and transaction data.
- **API Endpoints**:
  - `GET /api/portfolio`: Fetch portfolio.
  - `GET /api/strategies`: Strategies Comparison.
  - `GET /api/market-updates`: Update a market updates.

## Design Choices

### Backend Design
- **API Structure**: RESTful API with CRUD operations for managing transactions and users.
- **Database**: MongoDB Atlas stores user and transaction data.
- **Authentication**: No authentication implemented (focus is on features and UI).

### Frontend Design
- **React.js** is used for rendering the dynamic dashboard.
- **Tailwind CSS** for a responsive and clean UI.

### Assumptions
- Uses dummy data.
- No authentication implemented.

## Running Tests
Tests can be added using Jest and Supertest for API testing.

## Troubleshooting
- Ensure MongoDB Atlas connection string is correct.
- Start the backend server before the frontend to avoid errors.

## License
This project is licensed under the MIT License.

## Acknowledgments
- Thanks to React.js, Express.js, Tailwind CSS, and MongoDB Atlas for providing the tools that made this project possible.
