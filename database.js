import Database from "better-sqlite3";

const db = Database("./data/database.sqlite");

db.prepare(
  `CREATE TABLE IF NOT EXISTS cars(
    id INTEGER AUTOINCREMENT,
    brand TEXT,
    color TEXT,
    lplate TEXT)`
).run();

export const getAllCars = () => {
  db.prepare(`SELECT * FROM cars`).all();
};

export const getCarById = (id) => {
  db.prepare(`SELECT * FROM cars WHERE id = ?`).get(id);
};

export const saveCar = (brand, color, lplate) => {
  db.prepare(`INSERT INTO cars VALUES (?,?,?)`).run(brand, color, lplate);
};

export const updateCar = (id, brand, color, lplate) => {
  db.prepare(
    `UPDATE cars SET brand = ?, color = ?, lplate = ?, VALUES (?,?,?) WHERE id = ?`
  ).run(id, brand, color, lplate);
};
