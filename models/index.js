const Ngo = require("./ngos");
const Donation = require("./donation");

Ngo.hasMany(Donation, { foreignKey: "ngoId" });
Donation.belongsTo(Ngo, { foreignKey: "ngoId" });
