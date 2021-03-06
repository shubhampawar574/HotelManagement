const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config.env" });
const dbConfig = require("./db");
const roomsRoute = require("./routes/roomsRoutes");
const usersRoute = require("./routes/usersRoute");
const bookingsRoute = require("./routes/bookingsRoute");

app.use(express.json()); //for post request to read body of parameters

app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingsRoute);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on port no. ${port} using Nodemon`)
);
