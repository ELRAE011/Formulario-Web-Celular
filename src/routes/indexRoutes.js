import { Router } from "express";
import Celulares from "../models/Celulares";

const router = Router();
//Pagina
router.get("/", async (req, res) => {
  res.render("index");
});
//Lista
router.get("/update", async (req, res) => {
  const celulares = await Celulares.find().lean();
  res.render("listaCelulares", { celulares: celulares });
});

//Actualizar
router.get("/update/:id", async (req, res) => {
  try {
    const celulares = await Celulares.findById(req.params.id).lean();
    res.render("editarCelular", { celulares });
  } catch (error) {
    console.log(error.message);
  }
});
router.post("/update/:id", async (req, res) => {
  const { id } = req.params;
  await Celulares.findByIdAndUpdate(id, req.body);
  res.redirect("/update");
});

//Agregar
router.post("/celulares/agregar", async (req, res) => {
  try {
    const celulares = Celulares(req.body);
    const celularAlmacenado = await celulares.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

export default router;
