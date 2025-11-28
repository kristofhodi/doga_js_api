import express from "express";
import * as db from "./database.js";

const app = express();
app.use(express.json());
const PORT = 3211;

app.get("/cars", (req, res) => {
  const cars = db.getAllCars();
  return res.json(cars);
});

app.post("/cars", (req, res) => {
  const { brand, color, lplate } = req.body;
  if (!brand || !color || !lplate) {
    return res.status(404).json({ message: "Missing data" });
  }
  const car = db.getCarById(car.lastinsertrowid);
  const newCar = db.saveCar(car.id, brand, color, lplate);
  return res.status(201).json(newCar);
});

app.put("/cars/:id", (req, res) => {
  let car = db.getCarById(+req.params.id);
  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }
  const { brand, color, lplate } = req.body;
  if (!brand || !color || !lplate) {
    return res.status(404).json({ message: "Missing data" });
  }
  car = db.updateCar(id, brand, color, lplate);
  return res.status(200).json(car);
});

app.listen(PORT, () => {
  console.log(`Server runs on port 3211`);
});
