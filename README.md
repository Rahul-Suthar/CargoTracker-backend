# Cargo Shipment Tracker — Backend

This is the **Express/MongoDB backend** for the Cargo Shipment Tracker MERN app.

## Features

- RESTful API for managing shipments.
- Add, fetch, and update shipment details.
- Middleware for fetching shipments by ID.
- Mongoose models and validation.

## Tech Stack

- Node.js
- Express
- MongoDB & Mongoose
- dotenv

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)

### Setup

1. Clone this repo:
   ```sh
   git clone https://github.com/rahul-suthar/CargoTracker-backend.git
   cd CargoTracker-backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the backend server:
   ```sh
   npm run dev
   ```

## API Endpoints

- `GET /api/shipments` — Get all shipments
- `POST /api/shipment` — Add a new shipment
- `GET /api/shipment/:id` — Get a shipment by ID
- `PATCH /api/shipment/:id/update-location` — Update shipment location
- `GET /api/shipment/:id/eta` — Get shipment ETA

## Environment Variables

- `MONGO_URI` — MongoDB connection string
- `PORT` — Backend server port

---

**Note:**  
Do **not** commit your `.env` file or sensitive credentials.  
See `.gitignore` for details.