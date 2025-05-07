const express = require("express");
const Ngo = require("../models/ngos");
const router = express.Router();

// Create a new NGO
router.post("/ngo", async (req, res) => {
	try {
		const ngo = await Ngo.create(req.body);
		res.status(201).json({ message: "NGO created successfully", ngo });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error creating NGO", error });
	}
});

// Get all NGOs
router.get("/ngos", async (req, res) => {
	try {
		const ngos = await Ngo.findAll();
		res.status(200).json(ngos);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error fetching NGOs", error });
	}
});

module.exports = router;
