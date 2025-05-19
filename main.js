
// main.js
import { analizarArchivo } from './analizador-antlr4.js';
import fs from 'fs';

// Archivo a analizar
const inputFile = 'input.txt';

// Verificar que el archivo exista
if (!fs.existsSync(inputFile)) {
    console.error(`Error: El archivo ${inputFile} no existe.`);
    process.exit(1);
}

// Ejecutar el analizador
console.log(`Analizando archivo: ${inputFile}`);
analizarArchivo(inputFile);