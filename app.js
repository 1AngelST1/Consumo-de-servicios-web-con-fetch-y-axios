const API_URL = "http://localhost:3000/api/students";
const resultado = document.getElementById("resultado");

// Función auxiliar para imprimir en el HTML
function mostrarDatos(datos, titulo) {
    resultado.textContent = `${titulo}\n\n${JSON.stringify(datos, null, 2)}`;
}

// Función auxiliar para leer los inputs
function obtenerFormulario() {
    return {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: Number(document.getElementById("age").value)
    };
}

// ==========================================
// PETICIONES GET (Consultar)
// ==========================================

async function getStudentsFetch() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        mostrarDatos(data, "GET con fetch");
    } catch (error) {
        mostrarDatos(error.message, "Error en GET con fetch");
    }
}

async function getStudentsAxios() {
    try {
        const response = await axios.get(API_URL);
        mostrarDatos(response.data, "GET con Axios");
    } catch (error) {
        mostrarDatos(error.message, "Error en GET con Axios");
    }
}

// ==========================================
// PETICIONES POST (Registrar)
// ==========================================

async function createStudentFetch() {
    try {
        const newStudent = obtenerFormulario();
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStudent)
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        mostrarDatos(data, "POST con fetch (Éxito)");
    } catch (error) {
        mostrarDatos(error.message, "Error en POST con fetch");
    }
}

async function createStudentAxios() {
    try {
        const newStudent = obtenerFormulario();
        const response = await axios.post(API_URL, newStudent);
        mostrarDatos(response.data, "POST con Axios (Éxito)");
    } catch (error) {
        mostrarDatos(error.message, "Error en POST con Axios");
    }
}