import { Schema, model } from "mongoose";
const celularEsquema = new Schema(
  {
    clave: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    marca: {
      type: String,
      required: true,
      trim: true,
    },
    precio: {
      type: String,
      required: true,
      trim: true,
    },
    fechaLanzamiento: {
      type: Date,
      required: true,
    },
    ram: {
      type: Number,
      required: true,
      trim: true,
    },
    almacenamiento: {
      type: Number,
      required: true,
      trim: true,
    },
    cantCamaras: {
      type: Number,
      required: true,
      trim: true,
    },
    opcion: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default model("Celulares",celularEsquema);
