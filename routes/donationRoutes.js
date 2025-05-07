const express = require("express");
const Donation = require("../models/donation");
const router = express.Router();

// Create a new Donation
router.post("/donation", async (req, res) => {
	try {
		const donation = await Donation.create(req.body);
		res
			.status(201)
			.json({ message: "Donation created successfully", donation });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error creating donation", error });
	}
});

// Get all donations
router.get("/donations", async (req, res) => {
	try {
		const donations = await Donation.findAll();
		res.status(200).json(donations);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error fetching donations", error });
	}
});

module.exports = router;
