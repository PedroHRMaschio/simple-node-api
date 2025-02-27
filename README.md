# Simple Node.js Express Server

A basic Node.js server using Express, designed to demonstrate fundamental backend development skills. This project includes a simple API with optional SQLite database integration.

## Features
- Express server with basic routing
- Environment variable support using `dotenv`
- Optional SQLite database for data persistence
- Nodemon for automatic server restarts during development

## Installation

### Prerequisites
Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Clone the Repository
```sh
git clone https://github.com/PedroHRMaschio/simple-node-api.git
cd node-express-api
```

### Install Dependencies
```sh
npm install
```

## Usage

### Start the Server
Run the server in production mode:
```sh
npm start
```

Run the server in development mode with automatic restarts:
```sh
npm run dev
```

### API Endpoints
- `GET /` - Returns a welcome message
- `GET /api/users` - (Optional - WIP) Retrieves users from the SQLite database

## Environment Variables
Create a `.env` file in the project root and define variables as needed:
```
PORT=3000
```

## Database (Optional)
If using SQLite, a database file will be created automatically. You can define the schema and seed data inside `src/database.js`.

## Contributing
Feel free to fork the repository, make improvements, and open pull requests!
