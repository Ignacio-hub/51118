// analizador-antlr4.js
import antlr4 from 'antlr4';
import GrammarLexer from './generated/GrammarLexer.js';
import GrammarParser from './generated/GrammarParser.js';
import GrammarListener from './generated/GrammarListener.js';
import fs from 'fs';
// ...existing imports...
class Interpreter extends GrammarListener {
    exitSalida(ctx) {
        // ctx.cadena() obtiene el nodo de la cadena
        const texto = ctx.cadena().getText();
        // Elimina las comillas y muestra el texto
        console.log(eval(texto));
    }
    exitTerminar(ctx) {
        process.exit(0);
    }
}
// Leer archivo de entrada
function analizarArchivo(inputFile) {
    try {
        // Cargar el contenido del archivo
        const input = fs.readFileSync(inputFile, 'utf8');
        
        // Crear stream de caracteres desde el input
        const chars = new antlr4.CharStream(input);
        
        // Inicializar el lexer con el stream de caracteres
        const lexer = new GrammarLexer(chars);
        
        // Crear stream de tokens desde el lexer
        const tokens = new antlr4.CommonTokenStream(lexer);
        
        // Solicitar al lexer que reconozca todos los tokens
        tokens.fill();
        
        // Mostrar la tabla de tokens
        console.log("=== TABLA DE TOKENS ===");
        for (let i = 0; i < tokens.tokens.length; i++) {
            const token = tokens.tokens[i];
            if(token.type !== -1) { // Ignorar EOF
                console.log(`Token ${i}: Tipo=${token.type}, Texto='${token.text}', Línea=${token.line}, Columna=${token.column}`);
            }
        }

        // Crear el parser y establecer el stream de tokens
        const parser = new GrammarParser(tokens);
        
        // Remover los listeners de error por defecto
        parser.removeErrorListeners();
        
        // Agregar un manejador de errores personalizado
        parser.addErrorListener({
            syntaxError: function(recognizer, offendingSymbol, line, column, msg, e) {
                console.error(`Error sintáctico en línea ${line}:${column} - ${msg}`);
            }
        });
        
        // Iniciar el parseo desde la regla 'programa'
    
        const tree = parser.programa();
  
        // Si no hay errores, mostrar que el análisis fue exitoso
        if (parser._syntaxErrors === 0) {
            console.log("\n=== ANÁLISIS SINTÁCTICO EXITOSO ===");
            
            // Mostrar el árbol sintáctico
            console.log("\n=== ÁRBOL SINTÁCTICO ===");
            console.log(tree.toStringTree(parser.ruleNames));
            // Interpretar el árbol sintáctico
const listener = new Interpreter();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
            return true;
        } else {
            console.log("\n=== ANÁLISIS SINTÁCTICO FALLIDO ===");
            return false;
        }
    } catch (error) {
        console.error("Error al analizar el archivo:", error);
        return false;
    }
}

export {
    analizarArchivo
};