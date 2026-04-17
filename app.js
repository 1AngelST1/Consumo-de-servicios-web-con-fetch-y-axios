const API_URL = "http://localhost:3000/api/students";
const resultado = document.getElementById("resultado");

// ==========================================
// FUNCIÓN AUXILIAR: Mostrar resultados
// ==========================================
function mostrarDatos(datos, titulo, esError = false) {
    const prefijo = esError ? "Error:" : "Éxito:";
    resultado.textContent = `${prefijo} ${titulo}\n\n${JSON.stringify(datos, null, 2)}`;
    resultado.style.color = esError ? "#d32f2f" : "#00d96f";
}

// ==========================================
// FUNCIÓN AUXILIAR: Validar formulario
// ==========================================
function validarFormulario(name, email, age) {
    if (!name.trim() || !email.trim() || !age) {
        mostrarDatos("Por favor completa todos los campos del formulario", "Error de validación", true);
        return false;
    }
    if (age < 1 || age > 120) {
        mostrarDatos("La edad debe estar entre 1 y 120 años", "Error de validación", true);
        return false;
    }
    return true;
}

// ==========================================
// PASO 1: GET con fetch()
// ==========================================
async function getStudentsFetch() {
    try {
        const response = await fetch(API_URL);
        
        // Validar manualmente si la respuesta es correcta (característica de fetch)
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        mostrarDatos(data, "PASO 1: GET con fetch() - Estudiantes consultados");
    } catch (error) {
        mostrarDatos(error.message, "PASO 1: Error en GET con fetch()", true);
    }
}

// ==========================================
// PASO 2: GET con Axios
// ==========================================
async function getStudentsAxios() {
    try {
        // Axios rechaza automáticamente errores HTTP, sin validar manualmente
        const response = await axios.get(API_URL);
        mostrarDatos(response.data, "PASO 2: GET con Axios - Estudiantes consultados");
    } catch (error) {
        mostrarDatos(error.message, "PASO 2: Error en GET con Axios", true);
    }
}

// ==========================================
// PASO 3: POST con fetch()
// ==========================================
async function createStudentFetch() {
    try {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("age").value;

        if (!validarFormulario(name, email, age)) return;

        const newStudent = { name, email, age: Number(age) };

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
        mostrarDatos(data, "PASO 3: POST con fetch() - Estudiante registrado");
        
        // Limpiar formulario
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("age").value = "";
    } catch (error) {
        mostrarDatos(error.message, "PASO 3: Error en POST con fetch()", true);
    }
}

// ==========================================
// PASO 4: POST con Axios
// ==========================================
async function createStudentAxios() {
    try {
        const name = document.getElementById("name2").value;
        const email = document.getElementById("email2").value;
        const age = document.getElementById("age2").value;

        if (!validarFormulario(name, email, age)) return;

        const newStudent = { name, email, age: Number(age) };

        // Axios serializa automáticamente el objeto a JSON
        const response = await axios.post(API_URL, newStudent);
        mostrarDatos(response.data, "PASO 4: POST con Axios - Estudiante registrado");
        
        // Limpiar formulario
        document.getElementById("name2").value = "";
        document.getElementById("email2").value = "";
        document.getElementById("age2").value = "";
    } catch (error) {
        mostrarDatos(error.message, "PASO 4: Error en POST con Axios", true);
    }
}