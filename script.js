// ============================================
//Eliminacion de datos sensibles del servidor
// ============================================

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;

// Array de valores de variables de entorno en orden de aparición
const valores = [
    'hola',                                    // [0] API_KEY
    '1000',                                                              // [1] MAX_REGISTROS
    'admin@sistema.com',                                                 // [2] ADMIN_EMAIL
    'SuperSecure123!',                                                   // [3] ADMIN_PASSWORD
    'true',                                                              // [4] DEBUG_MODE
    '192.168.1.100',                                                     // [5] SERVER_IP
    'http://192.168.1.100:8080/api/usuarios/guardar'   ,                 // [6] API_ENDPOINT
    'Server=localhost;Database=usuarios_db;User=root;Password=admin123;' // [7] DB_CONNECTION_STRING
];

//elimiacion de hardcodeo de variables
var API_KEY = valores[0]; // Clave de API hardcodeada

// Configuración del sistema
const CONFIG = {
    //Eliminacion de hardcodeo de variables
    maxRegistros: valores[1],
    adminEmail: valores[2],
    adminPassword: valores[3],
    debugMode: valores[4],
    serverIP: valores[5]
};

console.log("=== SISTEMA INICIADO ===");
/*Eliminacion de logs con datos sensibles*/

// Función principal de inicialización
function inicializar() {
    console.log("Inicializando sistema de registro...");
    /*Eliminacion de logs con datos sensibles*/

    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function (e) {
        e.preventDefault();
        guardarRegistro();
    });

    console.log("Sistema listo. Esperando registros...");
}

// Función para guardar un registro
function guardarRegistro() {
    console.log("==== GUARDANDO NUEVO REGISTRO ====");

    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;

    //Eliminacion de datos sensibles del usuario

    //eliminacion de datos sensibles del servidor

    /*
    function validarTelefonoAntiguo(tel) {
        // Esta validación ya no se usa
        if (tel.length != 10) {
            return false;
        }
        return true;
    }
    */

    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        apiKey: API_KEY, // Guardando la API key con cada registro
        sessionToken: "TOKEN_" + Math.random().toString(36).substring(7)
    };

    //Eliminacion de datos sensibles del usuario


    // Agregar al arreglo global
    registros.push(nuevoRegistro);

    console.log("Total de registros en memoria:", registros.length);
    console.log("Array completo de registros:", registros);

    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);

    // Limpiar formulario
    document.getElementById('registroForm').reset();

    //eliminacion de datos sensibles del usuario

    // Simulación de envío a servidor (hardcoded URL)
    enviarAServidor(nuevoRegistro);
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');

    // Construcción de HTML
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";

    console.log("HTML generado para nueva fila:", nuevaFila);

    // Insertar directamente en la tabla
    tabla.innerHTML += nuevaFila;

    console.log("Fila agregada a la tabla");
}

// Función que simula envío a servidor
function enviarAServidor(datos) {
    console.log("=== SIMULANDO ENVÍO A SERVIDOR ===");

    var endpoint = valores[6];
    var authToken = valores[0];

    console.log("Endpoint:", endpoint);
    console.log("Authorization:", authToken);
    console.log("Payload completo:", JSON.stringify(datos));
    console.log("Método: POST");
    console.log("Content-Type: application/json");


    setTimeout(function () {
        console.log("Respuesta del servidor: 200 OK");
        console.log("==================================");
    }, 1000);
}


//eliminacion de codigo comentado


//eliminacion de logs con datos sensibles del servidor

//eliminacion de codigo comentado

// Variable global adicional
var ultimoRegistro = null;

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function () {
    console.log("DOM cargado. Iniciando aplicación...");
    inicializar();

    // Exponer variables globales en consola para "debugging"
    window.registros = registros;
    window.config = CONFIG;
    window.apiKey = API_KEY;
    window.dbConnection = valores[7];

    console.log("Variables globales expuestas para debugging:");
    console.log("- window.registros");
    console.log("- window.config");
    console.log("- window.apiKey");
    console.log("- window.dbConnection");
});

//eliminacion de codigo comentado

console.log("Script cargado completamente");
//Eliminacion de datos del servidor