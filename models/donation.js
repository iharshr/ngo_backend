const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

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
		type: DataTypes.INTEGER,
		references: {
			model: "Ngos", // name of the table
			key: "id",
		},
		allowNull: false,
	},
});

module.exports = Donation;
