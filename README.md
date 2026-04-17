# 🌿 Práctica 5: Consumo de Servicios Web con fetch() y Axios

**Universidad:** BUAP - FCC  
**Materia:** Servicios Web  
**Tema:** Consumo de APIs REST mediante peticiones GET y POST  
**Fecha:** Abril 2026

---

## 📋 Objetivo

Desarrollar una página web que consuma un servicio REST mediante peticiones **GET** y **POST** usando dos herramientas diferentes:
- **fetch()**: API nativa basada en promesas
- **Axios**: Librería que automatiza la conversión de JSON

Al finalizar, podrás comparar las diferencias entre ambas herramientas en el manejo de respuestas, conversión de datos JSON y control de errores.

---

## 🎯 Resultado Esperado

Una página interactiva que permita:

✅ **Consultar** una lista de estudiantes usando fetch()  
✅ **Consultar** la misma lista usando Axios  
✅ **Registrar** un nuevo estudiante usando fetch()  
✅ **Registrar** otro estudiante usando Axios  
✅ **Comparar** el comportamiento de ambas opciones

---

## 📁 Estructura del Proyecto

```
practica5-consumo-de-servicios-web/
│
├── server.js          # API REST con Express.js
├── index.html         # Página frontend con 4 pasos
├── app.js             # Lógica JavaScript (fetch + Axios)
├── package.json       # Dependencias del proyecto
└── README.md          # Este archivo
```

---

## 🚀 Cómo Ejecutar el Proyecto

### Paso 1: Instalar dependencias
```bash
npm install
```

### Paso 2: Iniciar el servidor
```bash
node server.js
```

Deberías ver:
```
Servidor ejecutándose en http://localhost:3000
```

### Paso 3: Abrir el navegador
Abre `index.html` en tu navegador web.

---

## 📖 Funcionamiento del Proyecto

El proyecto está dividido en **4 pasos claros**:

### **Paso 1: GET con fetch()**
- Hace una petición GET a `http://localhost:3000/api/students`
- **Particularidad de fetch():** Debe validar manualmente `response.ok`
- Muestra todos los estudiantes registrados

### **Paso 2: GET con Axios**
- Hace la misma petición GET usando Axios
- **Particularidad de Axios:** Rechaza automáticamente errores HTTP
- El código es más limpio y directo

### **Paso 3: POST con fetch()**
- Completa un formulario con: Nombre, Email, Edad
- Envía los datos usando POST a la misma ruta
- **fetch()** requiere:
  - Especificar `Content-Type: application/json`
  - Usar `JSON.stringify()` para convertir el objeto
  - Validar manualmente `response.ok`

### **Paso 4: POST con Axios**
- Completa otro formulario con datos diferentes
- Envía los datos usando Axios
- **Axios** simplifica el proceso:
  - Serializa automáticamente el objeto a JSON
  - Procesa la respuesta JSON implícitamente
  - Mucho menos código resultante

---

## 🔄 Diferencias Clave: fetch() vs Axios

| Característica | fetch() | Axios |
|---|---|---|
| **Tipo** | API Nativa | Librería |
| **Instalación** | Incluida en navegadores | Requiere importación |
| **Headers** | Configuración manual | Automática |
| **Serialización JSON** | Manual con `JSON.stringify()` | Automática |
| **Parseo JSON** | Manual con `.json()` | Automático en `response.data` |
| **Validación de errores HTTP** | Manual con `response.ok` | Automática en `catch` |
| **Líneas de código** | ➕ Más |  ➖ Menos |
| **Complejidad** | Más pasos | Menos pasos |

---

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js**: Entorno de ejecución
- **Express.js**: Framework web
- **CORS**: Para permitir peticiones desde otros orígenes

### Frontend
- **HTML5**: Estructura de la página
- **CSS3**: Estilos con paleta de color verde profesional
- **JavaScript (ES6+)**: Lógica de la aplicación
- **fetch()**: API nativa para peticiones HTTP
- **Axios**: Librería para peticiones HTTP

---

## 📊 Estructura de Datos

### Modelo de Estudiante

```json
{
  "id": 1,
  "name": "Ana López",
  "email": "ana@correo.com",
  "age": 21
}
```

### Petición GET
**Ruta:** `GET /api/students`  
**Respuesta:** Array de todos los estudiantes

### Petición POST
**Ruta:** `POST /api/students`  
**Body esperado:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@correo.com",
  "age": 20
}
```
**Respuesta:** El nuevo estudiante creado con su ID

---

## 🎨 Características del Diseño

✨ **Paleta de color verde profesional**  
✨ **Interfaz intuitiva y clara**  
✨ **4 pasos bien diferenciados**  
✨ **Resultados mostrados en tiempo real**  
✨ **Validación de formularios**  
✨ **Mensajes de error descriptivos**  
✨ **Timestamps en cada operación**  

---

## 💡 Conceptos Clave Explicados

### ¿Qué es una API REST?
Una forma de comunicación entre cliente y servidor usando URLs y métodos HTTP (GET, POST, PUT, DELETE).

### ¿Qué es una promesa?
Un objeto JavaScript que representa el resultado eventual de una operación asincrónica.

### ¿Qué es async/await?
Forma moderna de trabajar con promesas de manera más legible y sincrónica.

### ¿Qué es CORS?
Mecanismo que permite que aplicaciones web de un origen accedan a recursos de otro origen.

### ¿Qué es JSON?
Formato de intercambio de datos ligero y legible basado en texto.

---

## 📝 Códigos de Respuesta HTTP

| Código | Significado | Uso |
|---|---|---|
| **200** | OK | GET exitoso |
| **201** | Created | POST exitoso |
| **400** | Bad Request | Datos inválidos |
| **404** | Not Found | Recurso no existe |
| **500** | Server Error | Error en el servidor |

---

## 🧪 Pruebas Recomendadas

1. **Abre la página** → Debe verse con diseño verde
2. **Haz GET con fetch** → Verás 2 estudiantes registrados
3. **Haz GET con Axios** → Mismos estudiantes, diferente método
4. **Registra un estudiante con fetch** → Llena el primer formulario
5. **Registra otro con Axios** → Llena el segundo formulario
6. **Verifica registros** → Haz GET nuevamente para ver los nuevos

---

## 🐛 Solución de Problemas

### ❌ "Cannot GET /api/students"
- El servidor no está corriendo. Ejecuta `node server.js`

### ❌ "CORS Error"
- El servidor no tiene CORS habilitado. Verifica `server.js`

### ❌ "No recibe datos del formulario"
- Verifica que los IDs de inputs coincidan en `index.html` y `app.js`

### ❌ "El navegador muestra error en consola"
- Abre DevTools (F12) y revisa la consola para detalles del error

---

## 📚 Recursos Adicionales

- [MDN - fetch() API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [Axios Documentation](https://axios-http.com/)
- [Express.js Guide](https://expressjs.com/)
- [CORS Explained](https://developer.mozilla.org/es/docs/Web/HTTP/CORS)

---

## ✅ Checklist para la Presentación

- [ ] Servidor ejecutándose sin errores
- [ ] Página carga con diseño verde profesional
- [ ] GET con fetch muestra estudiantes
- [ ] GET con Axios muestra mismo resultado
- [ ] POST con fetch registra nuevo estudiante
- [ ] POST con Axios registra otro estudiante
- [ ] Validaciones funcionan correctamente
- [ ] Errores se muestran claramente
- [ ] Código está bien comentado y es fácil de entender

---

## 👨‍💻 Autor

**Angel** | Estudiante de Servicios Web  
FCC BUAP | 2026

---

## 📄 Licencia

Este proyecto es de propósito educativo y forma parte de la Práctica 5 de la materia Servicios Web en BUAP.

---

**¡Listo para presentar! 🚀**
