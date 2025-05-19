// Generated from c:/Users/Ignacio/OneDrive/Escritorio/facultad/Sintaxis/Analizador/Grammar.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link GrammarParser}.
 */
public interface GrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link GrammarParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(GrammarParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(GrammarParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link GrammarParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(GrammarParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(GrammarParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GrammarParser#seleccion}.
	 * @param ctx the parse tree
	 */
	void enterSeleccion(GrammarParser.SeleccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#seleccion}.
	 * @param ctx the parse tree
	 */
	void exitSeleccion(GrammarParser.SeleccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GrammarParser#caso}.
	 * @param ctx the parse tree
	 */
	void enterCaso(GrammarParser.CasoContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#caso}.
	 * @param ctx the parse tree
	 */
	void exitCaso(GrammarParser.CasoContext ctx);
	/**
	 * Enter a parse tree produced by {@link GrammarParser#caso_defecto}.
	 * @param ctx the parse tree
	 */
	void enterCaso_defecto(GrammarParser.Caso_defectoContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#caso_defecto}.
	 * @param ctx the parse tree
	 */
	void exitCaso_defecto(GrammarParser.Caso_defectoContext ctx);
	/**
	 * Enter a parse tree produced by {@link GrammarParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(GrammarParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(GrammarParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link GrammarParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(GrammarParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(GrammarParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link GrammarParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(GrammarParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(GrammarParser.TerminarContext ctx);
	/**
	 * Enter a parse tree produced by {@link GrammarParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpresion(GrammarParser.ExpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpresion(GrammarParser.ExpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GrammarParser#constante}.
	 * @param ctx the parse tree
	 */
	void enterConstante(GrammarParser.ConstanteContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#constante}.
	 * @param ctx the parse tree
	 */
	void exitConstante(GrammarParser.ConstanteContext ctx);
	/**
	 * Enter a parse tree produced by {@link GrammarParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(GrammarParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(GrammarParser.CadenaContext ctx);
	/**
	 * Enter a parse tree produced by {@link GrammarParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(GrammarParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(GrammarParser.NumeroContext ctx);
}