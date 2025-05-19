# Analizador Sintáctico e Intérprete Básico

Este proyecto permite analizar e interpretar un lenguaje sencillo definido en `Grammar.g4` usando ANTLR4 y Node.js.

## Requisitos
- Node.js instalado
- Java instalado (para generar los archivos de ANTLR)

## Estructura del proyecto
- `Grammar.g4`: Gramática del lenguaje.
- `input.txt`: Archivo de entrada a analizar (puedes reemplazarlo por cualquier ejemplo).
- `main.js`: Script principal para ejecutar el análisis e interpretación.
- `analizador-antlr4.js`: Lógica del análisis, reporte de errores, tabla de tokens y la interpretación.
- `generated/`: Carpeta donde se generan los archivos de ANTLR (`GrammarLexer.js`, `GrammarParser.js`, etc).
- `Ejemplo 1 (BIen).txt`, `Ejemplo 2 (Bien).txt`, `Ejemplo 3 (Mal).txt`, `Ejemplo 4 (Mal).txt`: Ejemplos de código fuente correctos e incorrectos.

## Instrucciones de uso

### 1. Generar los archivos de ANTLR (solo la primera vez o si cambias la gramática)

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
java -jar .\antlr-4.13.2-complete.jar.jar -Dlanguage=JavaScript Grammar.g4 -o generated
``
Esto creará los archivos necesarios en la carpeta `generated/`.

### 2. Selecciona el ejemplo a probar

Puedes usar uno de los archivos de ejemplo incluidos:
- `Ejemplo 1 (BIen).txt` (correcto)
- `Ejemplo 2 (Bien).txt` (correcto)
- `Ejemplo 3 (Mal).txt` (incorrecto)
- `Ejemplo 4 (Mal).txt` (incorrecto)
Copia el contenido del ejemplo que quieras probar y pégalo en `input.txt` (o renombra el archivo de ejemplo a `input.txt`).
### 3. Instala las dependencias de Node.js (solo la primera vez)
powershell
npm install
### 4. Ejecuta el analizador e intérprete
```powershell
node main.js
El programa mostrará:
- Tabla de tokens y lexemas
- Si la entrada es correcta o tiene errores (con línea y causa)
- El árbol sintáctico
- La interpretación (ejecución) del código fuente
## Notas
- Si quieres probar otro ejemplo, repite el paso 2.
- Puedes modificar la gramática en `Grammar.g4` y volver a generar los archivos ANTLR (paso 1).
- Si tienes dudas o errores, revisa la consola para ver mensajes detallados.
**Autor:** Ignacio
