const express = require("express");
const Donation = require("../models/donation");
const Ngo = require("../models/ngos");
const sequelize = require("../config/db");
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
		const donations = await Donation.findAll({
			include: {
				model: Ngo, // Include the related Ngo model
				attributes: [
					"id", // NGO id
					"ngo_name", // NGO name
					"type_ngo", // NGO type
					"email", // NGO email
					"phone", // NGO phone
					"address", // NGO address
					"personal_name", // Personal contact name
					"personal_email", // Personal contact email
					"personal_phone", // Personal contact phone
					"message", // NGO message
					"image_url", // NGO image URL
					"status", // NGO status
				],
				as: "ngo", // Alias used in the association to refer to Ngo
			},
		});

		res.status(200).json(donations);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error fetching donations", error });
	}
});

module.exports = router;
