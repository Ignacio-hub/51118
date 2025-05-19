grammar Grammar;

// Reglas del parser
programa: instruccion+ EOF;

instruccion: seleccion;

seleccion: SEGUN expresion HACER LLAVE_A caso* caso_defecto? LLAVE_C FINSEGUN;

caso: CASO constante DOS_PUNTOS LLAVE_A sentencia* LLAVE_C;

caso_defecto: DEFECTO DOS_PUNTOS LLAVE_A sentencia* LLAVE_C;

sentencia: salida | terminar;

salida: IMPRIMIR PARENTESIS_A cadena PARENTESIS_C PUNTO_COMA;

terminar: SALIR PUNTO_COMA;

expresion: constante;

constante: cadena | numero;

cadena: CADENA;
numero: NUMERO;

// Lexer rules
SEGUN: 'segun';
HACER: 'hacer';
FINSEGUN: 'finsegun';
CASO: 'caso';
DEFECTO: 'defecto';
IMPRIMIR: 'imprimir';
SALIR: 'salir';

LLAVE_A: '{';
LLAVE_C: '}';
PARENTESIS_A: '(';
PARENTESIS_C: ')';
DOS_PUNTOS: ':';
PUNTO_COMA: ';';

CADENA: '"' ( ~["\r\n] )* '"';
NUMERO: [0-9]+;
ID: [a-zA-Z_][a-zA-Z0-9_]*;
WS: [ \t\r\n]+ -> skip;
COMENTARIO: '//' ~[\r\n]* -> skip;