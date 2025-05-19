// Generated from Grammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import GrammarListener from './GrammarListener.js';
const serializedATN = [4,1,18,96,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,4,0,26,8,
0,11,0,12,0,27,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,5,2,39,8,2,10,2,12,2,
42,9,2,1,2,3,2,45,8,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,5,3,55,8,3,10,3,12,
3,58,9,3,1,3,1,3,1,4,1,4,1,4,1,4,5,4,66,8,4,10,4,12,4,69,9,4,1,4,1,4,1,5,
1,5,3,5,75,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,3,9,90,
8,9,1,10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,0,90,
0,25,1,0,0,0,2,31,1,0,0,0,4,33,1,0,0,0,6,49,1,0,0,0,8,61,1,0,0,0,10,74,1,
0,0,0,12,76,1,0,0,0,14,82,1,0,0,0,16,85,1,0,0,0,18,89,1,0,0,0,20,91,1,0,
0,0,22,93,1,0,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,0,
0,27,28,1,0,0,0,28,29,1,0,0,0,29,30,5,0,0,1,30,1,1,0,0,0,31,32,3,4,2,0,32,
3,1,0,0,0,33,34,5,1,0,0,34,35,3,16,8,0,35,36,5,2,0,0,36,40,5,8,0,0,37,39,
3,6,3,0,38,37,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,44,1,
0,0,0,42,40,1,0,0,0,43,45,3,8,4,0,44,43,1,0,0,0,44,45,1,0,0,0,45,46,1,0,
0,0,46,47,5,9,0,0,47,48,5,3,0,0,48,5,1,0,0,0,49,50,5,4,0,0,50,51,3,18,9,
0,51,52,5,12,0,0,52,56,5,8,0,0,53,55,3,10,5,0,54,53,1,0,0,0,55,58,1,0,0,
0,56,54,1,0,0,0,56,57,1,0,0,0,57,59,1,0,0,0,58,56,1,0,0,0,59,60,5,9,0,0,
60,7,1,0,0,0,61,62,5,5,0,0,62,63,5,12,0,0,63,67,5,8,0,0,64,66,3,10,5,0,65,
64,1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,70,1,0,0,0,69,67,
1,0,0,0,70,71,5,9,0,0,71,9,1,0,0,0,72,75,3,12,6,0,73,75,3,14,7,0,74,72,1,
0,0,0,74,73,1,0,0,0,75,11,1,0,0,0,76,77,5,6,0,0,77,78,5,10,0,0,78,79,3,20,
10,0,79,80,5,11,0,0,80,81,5,13,0,0,81,13,1,0,0,0,82,83,5,7,0,0,83,84,5,13,
0,0,84,15,1,0,0,0,85,86,3,18,9,0,86,17,1,0,0,0,87,90,3,20,10,0,88,90,3,22,
11,0,89,87,1,0,0,0,89,88,1,0,0,0,90,19,1,0,0,0,91,92,5,14,0,0,92,21,1,0,
0,0,93,94,5,15,0,0,94,23,1,0,0,0,7,27,40,44,56,67,74,89];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GrammarParser extends antlr4.Parser {

    static grammarFileName = "Grammar.g4";
    static literalNames = [ null, "'segun'", "'hacer'", "'finsegun'", "'caso'", 
                            "'defecto'", "'imprimir'", "'salir'", "'{'", 
                            "'}'", "'('", "')'", "':'", "';'" ];
    static symbolicNames = [ null, "SEGUN", "HACER", "FINSEGUN", "CASO", 
                             "DEFECTO", "IMPRIMIR", "SALIR", "LLAVE_A", 
                             "LLAVE_C", "PARENTESIS_A", "PARENTESIS_C", 
                             "DOS_PUNTOS", "PUNTO_COMA", "CADENA", "NUMERO", 
                             "ID", "WS", "COMENTARIO" ];
    static ruleNames = [ "programa", "instruccion", "seleccion", "caso", 
                         "caso_defecto", "sentencia", "salida", "terminar", 
                         "expresion", "constante", "cadena", "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GrammarParser.ruleNames;
        this.literalNames = GrammarParser.literalNames;
        this.symbolicNames = GrammarParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GrammarParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.instruccion();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 29;
	        this.match(GrammarParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GrammarParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.seleccion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seleccion() {
	    let localctx = new SeleccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GrammarParser.RULE_seleccion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(GrammarParser.SEGUN);
	        this.state = 34;
	        this.expresion();
	        this.state = 35;
	        this.match(GrammarParser.HACER);
	        this.state = 36;
	        this.match(GrammarParser.LLAVE_A);
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 37;
	            this.caso();
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 43;
	            this.caso_defecto();
	        }

	        this.state = 46;
	        this.match(GrammarParser.LLAVE_C);
	        this.state = 47;
	        this.match(GrammarParser.FINSEGUN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caso() {
	    let localctx = new CasoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GrammarParser.RULE_caso);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(GrammarParser.CASO);
	        this.state = 50;
	        this.constante();
	        this.state = 51;
	        this.match(GrammarParser.DOS_PUNTOS);
	        this.state = 52;
	        this.match(GrammarParser.LLAVE_A);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===7) {
	            this.state = 53;
	            this.sentencia();
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 59;
	        this.match(GrammarParser.LLAVE_C);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caso_defecto() {
	    let localctx = new Caso_defectoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GrammarParser.RULE_caso_defecto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(GrammarParser.DEFECTO);
	        this.state = 62;
	        this.match(GrammarParser.DOS_PUNTOS);
	        this.state = 63;
	        this.match(GrammarParser.LLAVE_A);
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===7) {
	            this.state = 64;
	            this.sentencia();
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 70;
	        this.match(GrammarParser.LLAVE_C);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, GrammarParser.RULE_sentencia);
	    try {
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 72;
	            this.salida();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 73;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GrammarParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(GrammarParser.IMPRIMIR);
	        this.state = 77;
	        this.match(GrammarParser.PARENTESIS_A);
	        this.state = 78;
	        this.cadena();
	        this.state = 79;
	        this.match(GrammarParser.PARENTESIS_C);
	        this.state = 80;
	        this.match(GrammarParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, GrammarParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(GrammarParser.SALIR);
	        this.state = 83;
	        this.match(GrammarParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, GrammarParser.RULE_expresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.constante();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constante() {
	    let localctx = new ConstanteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, GrammarParser.RULE_constante);
	    try {
	        this.state = 89;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 87;
	            this.cadena();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 88;
	            this.numero();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, GrammarParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(GrammarParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, GrammarParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(GrammarParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

GrammarParser.EOF = antlr4.Token.EOF;
GrammarParser.SEGUN = 1;
GrammarParser.HACER = 2;
GrammarParser.FINSEGUN = 3;
GrammarParser.CASO = 4;
GrammarParser.DEFECTO = 5;
GrammarParser.IMPRIMIR = 6;
GrammarParser.SALIR = 7;
GrammarParser.LLAVE_A = 8;
GrammarParser.LLAVE_C = 9;
GrammarParser.PARENTESIS_A = 10;
GrammarParser.PARENTESIS_C = 11;
GrammarParser.DOS_PUNTOS = 12;
GrammarParser.PUNTO_COMA = 13;
GrammarParser.CADENA = 14;
GrammarParser.NUMERO = 15;
GrammarParser.ID = 16;
GrammarParser.WS = 17;
GrammarParser.COMENTARIO = 18;

GrammarParser.RULE_programa = 0;
GrammarParser.RULE_instruccion = 1;
GrammarParser.RULE_seleccion = 2;
GrammarParser.RULE_caso = 3;
GrammarParser.RULE_caso_defecto = 4;
GrammarParser.RULE_sentencia = 5;
GrammarParser.RULE_salida = 6;
GrammarParser.RULE_terminar = 7;
GrammarParser.RULE_expresion = 8;
GrammarParser.RULE_constante = 9;
GrammarParser.RULE_cadena = 10;
GrammarParser.RULE_numero = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(GrammarParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_instruccion;
    }

	seleccion() {
	    return this.getTypedRuleContext(SeleccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitInstruccion(this);
		}
	}


}



class SeleccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_seleccion;
    }

	SEGUN() {
	    return this.getToken(GrammarParser.SEGUN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	HACER() {
	    return this.getToken(GrammarParser.HACER, 0);
	};

	LLAVE_A() {
	    return this.getToken(GrammarParser.LLAVE_A, 0);
	};

	LLAVE_C() {
	    return this.getToken(GrammarParser.LLAVE_C, 0);
	};

	FINSEGUN() {
	    return this.getToken(GrammarParser.FINSEGUN, 0);
	};

	caso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CasoContext);
	    } else {
	        return this.getTypedRuleContext(CasoContext,i);
	    }
	};

	caso_defecto() {
	    return this.getTypedRuleContext(Caso_defectoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterSeleccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitSeleccion(this);
		}
	}


}



class CasoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_caso;
    }

	CASO() {
	    return this.getToken(GrammarParser.CASO, 0);
	};

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	DOS_PUNTOS() {
	    return this.getToken(GrammarParser.DOS_PUNTOS, 0);
	};

	LLAVE_A() {
	    return this.getToken(GrammarParser.LLAVE_A, 0);
	};

	LLAVE_C() {
	    return this.getToken(GrammarParser.LLAVE_C, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterCaso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitCaso(this);
		}
	}


}



class Caso_defectoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_caso_defecto;
    }

	DEFECTO() {
	    return this.getToken(GrammarParser.DEFECTO, 0);
	};

	DOS_PUNTOS() {
	    return this.getToken(GrammarParser.DOS_PUNTOS, 0);
	};

	LLAVE_A() {
	    return this.getToken(GrammarParser.LLAVE_A, 0);
	};

	LLAVE_C() {
	    return this.getToken(GrammarParser.LLAVE_C, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterCaso_defecto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitCaso_defecto(this);
		}
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitSentencia(this);
		}
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(GrammarParser.IMPRIMIR, 0);
	};

	PARENTESIS_A() {
	    return this.getToken(GrammarParser.PARENTESIS_A, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	PARENTESIS_C() {
	    return this.getToken(GrammarParser.PARENTESIS_C, 0);
	};

	PUNTO_COMA() {
	    return this.getToken(GrammarParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitSalida(this);
		}
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(GrammarParser.SALIR, 0);
	};

	PUNTO_COMA() {
	    return this.getToken(GrammarParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitTerminar(this);
		}
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_expresion;
    }

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitExpresion(this);
		}
	}


}



class ConstanteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_constante;
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterConstante(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitConstante(this);
		}
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_cadena;
    }

	CADENA() {
	    return this.getToken(GrammarParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitCadena(this);
		}
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(GrammarParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitNumero(this);
		}
	}


}




GrammarParser.ProgramaContext = ProgramaContext; 
GrammarParser.InstruccionContext = InstruccionContext; 
GrammarParser.SeleccionContext = SeleccionContext; 
GrammarParser.CasoContext = CasoContext; 
GrammarParser.Caso_defectoContext = Caso_defectoContext; 
GrammarParser.SentenciaContext = SentenciaContext; 
GrammarParser.SalidaContext = SalidaContext; 
GrammarParser.TerminarContext = TerminarContext; 
GrammarParser.ExpresionContext = ExpresionContext; 
GrammarParser.ConstanteContext = ConstanteContext; 
GrammarParser.CadenaContext = CadenaContext; 
GrammarParser.NumeroContext = NumeroContext; 
