const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let students = [
    { id: 1, name: "Ana López", email: "ana@correo.com", age: 21 },
    { id: 2, name: "Luis Pérez", email: "luis@correo.com", age: 22 }
];

// GET: obtener todos los estudiantes
app.get("/api/students", (req, res) => {
    res.json(students);
});

// POST: registrar un nuevo estudiante
app.post("/api/students", (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).json({
            message: "Todos los campos son obligatorios"
        });
    }

    const newStudent = {
        id: students.length + 1,
        name,
        email,
        age
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});