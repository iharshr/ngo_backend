const express = require("express");
const Ngo = require("../models/ngos");
const sequelize = require("../config/db");
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
		const ngos = await Ngo.findAll({
			attributes: {
				include: [
					[
						sequelize.literal(`(
							SELECT COUNT(*)
							FROM "Donations" AS d
							WHERE d."ngoId" = "Ngo"."id"
						)`),
						"donationCount",
					],
				],
			},
		});
		res.status(200).json(ngos);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error fetching NGOs", error });
	}
});

router.get("/ngos-confirmed", async (req, res) => {
	try {
		const ngos = await Ngo.findAll({ where: { status: "confirmed" } });
		res.status(200).json(ngos);
	} catch (error) {
		console.error("Error fetching confirmed NGOs:", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

router.post("/ngos-change-status/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { status } = req.body;

		if (!["confirmed", "pending"].includes(status)) {
			return res.status(400).json({ message: "Invalid status value" });
		}

		const ngo = await Ngo.findByPk(id);
		if (!ngo) {
			return res.status(404).json({ message: "NGO not found" });
		}

		ngo.status = status;
		await ngo.save();

		res.status(200).json({ message: "NGO status updated", ngo });
	} catch (error) {
		console.error("Error updating NGO status:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

module.exports = router;
