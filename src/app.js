
const express = require("express");
const app = express();
const { config } = require( "dotenv");
const cors = require("cors") ;

config();

app.use(cors());

// Import routes
const authRoutes  = require ("./routes/auth");
const userRoutes  = require ("./routes/user");
const usersRoutes  = require ("./routes/users");
const orderRoutes  = require ("./routes/orders");
const ordersRoutes  = require ("./routes/allOrders");

// Constants
const { PORT } = require( "./config/index.js");

//DB
const { connect }  = require( "mongoose");
connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to mongo")
);

// Middleware
app.use(express.json());

// Routes Middleware
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/orders", ordersRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server is running at ${PORT}`);
});
