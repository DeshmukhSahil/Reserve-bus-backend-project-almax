# Bus Reservation App - Backend

This is the backend part of the Bus Reservation App, which is built using the MERN (MongoDB, Express, React, Node.js) stack. It provides the server-side logic and API endpoints for managing bus trips, ticket bookings, and more.

## Features

- **Trips Management:** Create, retrieve, and query bus trips.
- **Ticket Booking:** Allow users to book tickets for bus trips.
- **Bus Information:** Manage bus details such as name, category, and available seats.
- **State and Districts Data:** Retrieve information about states and districts.

## Technologies Used

- **Node.js:** Server runtime environment.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for data storage.
- **Mongoose:** ODM (Object-Document Mapping) for MongoDB.
- **dotenv:** Environment variable management.
- **cors:** Cross-Origin Resource Sharing middleware.
- **morgan:** HTTP request logger middleware.

## Getting Started

1. Clone this repository to your local machine.

```bash
git clone https://github.com/DeshmukhSahil/Reserve-Bus-backend-almax.git
```

2. Install dependencies using npm or yarn.

```bash
npm install
# or
yarn install
```

3. Set up a MongoDB database and configure the connection URL in the `.env` file.

4. Start the backend server.

```bash
npm start
# or
yarn start
```

The server will run on port 8080 by default.

## API Endpoints

- **GET /api/states_districts:** Retrieve states and districts data.
- **POST /api/addbus:** Add bus information.
- **GET /api/getbus:** Retrieve bus data.
- **POST /api/bookticket:** Book a bus ticket.
- **GET /api/getbookedtickets:** Query booked tickets.
- **GET /api/gettrips:** Retrieve all trips.
- **GET /api/tripsbydate:** Get trips by date.
- **GET /api/tripsbyquery:** Query trips by various criteria.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests to improve this project.
