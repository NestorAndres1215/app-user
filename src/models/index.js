import sequelize from "../config/database.js";
import User from "./User.js";
import Role from "./Role.js";
import Status from "./Status.js";

const syncDB = async (force = false) => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos exitosa");

    await sequelize.sync({ alter: !force, force }); // alter=true actualiza tablas sin borrar, force=true reinicia
    console.log("✅ Tablas sincronizadas correctamente");
  } catch (error) {
    console.error("❌ Error al conectar o sincronizar la base de datos:", error.message);
    process.exit(1); // Sale de la app si hay error crítico
  }
};

export { sequelize, User, Role, Status, syncDB };
