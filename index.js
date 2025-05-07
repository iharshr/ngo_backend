// postgresql://db_owner:npg_JBZuRcNVD03n@ep-bold-cell-a439eq8i-pooler.us-east-1.aws.neon.tech/db?sslmode=require

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/db");
const ngoRoutes = require("./routes/ngoRoutes");
const donationRoutes = require("./routes/donationRoutes");

const app = express();
const PORT = 5050;

app.use(cors());
app.use(bodyParser.json());

// Use the routes
app.use("/api", ngoRoutes);
app.use("/api", donationRoutes);

// Test route
app.get("/", (req, res) => {
	res.send("Welcome to the NGO and Donations API");
});

console.log("Starting sync...");
sequelize
	.authenticate()
	.then(() => {
		console.log("Database connected.");
		return sequelize.sync({ force: false });
	})
	.then(() => {
		console.log("Sync complete, starting server...");
		app.listen(PORT, () => {
			console.log(`✅ Server running on http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.error("❌ Unable to start:", err);
	});
