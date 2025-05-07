const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Assuming sequelize instance is initialized here

const Ngo = sequelize.define("Ngo", {
	ngo_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	type_ngo: {
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
	address: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	personal_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	personal_email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	personal_phone: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	message: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
	image_url: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	status: {
		type: DataTypes.STRING,
		defaultValue: "pending",
	},
});

module.exports = Ngo; // Make sure you're exporting the model
