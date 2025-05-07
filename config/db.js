const { PostgresDialect } = require("@sequelize/postgres");
const { Sequelize } = require("sequelize");

// PostgreSQL connection URL with SSL configuration
const sequelize = new Sequelize(
	"postgresql://db_owner:npg_JBZuRcNVD03n@ep-bold-cell-a439eq8i-pooler.us-east-1.aws.neon.tech/db?sslmode=require",
	{
		dialect: PostgresDialect,
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false, // Important for certain PostgreSQL setups with SSL
			},
		},
	}
);

module.exports = sequelize;
