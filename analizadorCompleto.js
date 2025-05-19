// analizadorCompleto.js
import antlr4 from 'antlr4';
import { LenguajeLexer } from './generated/LenguajeLexer.js';
import { LenguajeParser } from './generated/LenguajeParser.js';
import { LenguajeListener } from './generated/LenguajeListener.js';
import fs from 'fs';

class InterpretadorListener extends LenguajeListener {
    constructor() {
        super();
        this.valorActual = null;
        this.codigoJS = "";
    }

    // Override de métodos del listener
    enterPrograma(ctx) {
        this.codigoJS = "";
    }

    exitPrograma(ctx) {
        console.log("\n=== CÓDIGO JAVASCRIPT GENERADO ===");
        console.log(this.codigoJS);
        
        console.log("\n=== EJECUTANDO CÓDIGO ===");
        try {
            eval(this.codigoJS);
        } catch (error) {
            console.error("Error al ejecutar el código generado:", error);
        }
    }

    enterSeleccion(ctx) {
        const expresion = ctx.expresion().getText();
        this.codigoJS += `switch(${expresion}) {\n`;
    }

    exitSeleccion(ctx) {
        this.codigoJS += "}\n";
    }

    enterCaso(ctx) {
        const constante = ctx.constante().getText();
        this.codigoJS += `  case ${constante}:\n`;
    }

    exitCaso(ctx) {
        this.codigoJS += "    break;\n";
    }

    enterCaso_defecto(ctx) {
        this.codigoJS += "  default:\n";
    }

    exitCaso_defecto(ctx) {
        this.codigoJS += "    break;\n";
    }

    enterSalida(ctx) {
        const cadena = ctx.cadena().getText();
        this.codigoJS += `    console.log(${cadena});\n`;
    }

    enterTerminar(ctx) {
        this.codigoJS += "    break;\n";
    }
}

// Función principal para analizar y procesar el archivo
function analizarCompletoArchivo(inputFile) {
    try {
        // Cargar el contenido del archivo
        const input = fs.readFileSync(inputFile, 'utf8');
        
        // Crear stream de caracteres desde el input
        const chars = new antlr4.CharStream(input);
        
        // Inicializar el lexer con el stream de caracteres
        const lexer = new LenguajeLexer(chars);
        
        // Crear stream de tokens desde el lexer
        const tokens = new antlr4.CommonTokenStream(lexer);
        
        // Solicitar al lexer que reconozca todos los tokens
        tokens.fill();
        
        // Mostrar la tabla de tokens
        console.log("=== TABLA DE TOKENS ===");
        for (let i = 0; i < tokens.tokens.length; i++) {
            const token = tokens.tokens[i];
            if(token.type !== -1) { // Ignorar EOF
                const tokenName = lexer.symbolicNames[token.type] || token.type;
                console.log(`Token ${i}: Tipo=${tokenName} (${token.type}), Texto='${token.text}', Línea=${token.line}, Columna=${token.column}`);
            }
        }

        // Crear el parser y establecer el stream de tokens
        const parser = new LenguajeParser(tokens);
        
        // Remover los listeners de error por defecto
        parser.removeErrorListeners();
        
        // Agregar un manejador de errores personalizado
        let hayErrores = false;
        parser.addErrorListener({
            syntaxError: function(recognizer, offendingSymbol, line, column, msg, e) {
                hayErrores = true;
                console.error(`Error sintáctico en línea ${line}:${column} - ${msg}`);
            }
        });
        
        // Iniciar el parseo desde la regla 'programa'
        const tree = parser.programa();
        
        // Si no hay errores, continuar con el análisis
        if (!hayErrores) {
            console.log("\n=== ANÁLISIS SINTÁCTICO EXITOSO ===");
            
            // Mostrar el árbol sintáctico
            console.log("\n=== ÁRBOL SINTÁCTICO ===");
            console.log(tree.toStringTree(parser.ruleNames));
            
            // Aplicar el listener para la interpretación
            const interpretador = new InterpretadorListener();
            antlr4.tree.ParseTreeWalker.DEFAULT.walk(interpretador, tree);
            
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
    analizarCompletoArchivo
};