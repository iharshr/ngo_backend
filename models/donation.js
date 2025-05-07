const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db"); // Assuming sequelize instance is initialized here
const Ngo = require("./ngos"); // Import the Ngo model correctly

const Donation = sequelize.define("Donation", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	address: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	phone: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	datetime: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	weight: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	length: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	height: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	ngoId: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: "Ngos", // Reference to the 'Ngos' table
			key: "id", // Reference the 'id' field in the 'Ngos' table
		},
	},
});

// Define the association correctly
Donation.belongsTo(Ngo, {
	foreignKey: "ngoId", // The field in the Donation model
	as: "ngo", // Alias for the association
});

module.exports = Donation; // Make sure you're exporting the model
