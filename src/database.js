import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb://127.0.0.1:27017/Formulario-Web-Celular"); //localhost marca error mejor la ip: 127.0.0.1:27017
    console.log("Database connected to ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
