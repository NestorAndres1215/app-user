import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // Cambiar a console.log si quieres debug
  }
);

// Función para probar la conexión
export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("❌ No se pudo conectar a la base de datos:", error.message);
    process.exit(1); // Sale de la app si no hay conexión
  }
};

export default sequelize;
