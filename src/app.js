const express = require("express")
const app = express()
const path = require("path");
const cors = require("cors");

const connectDb = require("./config/db")
// Start the server

app.use(cors());
app.use(express.json())
const dotenv = require("dotenv");
dotenv.config();
app.use("/public", express.static(path.join(__dirname, "../public")));
const authRoutes = require("./routes/authRoutes")
const eventRoutes = require("./routes/eventsRoutes")

connectDb();

app.use("/api/auth", authRoutes)
app.use("/api/events", eventRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app