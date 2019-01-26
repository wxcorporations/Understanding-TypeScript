"use strict";
/******************************************************************
 *
 *                      PADRAO MODULOS
 *
 ******************************************************************
 *
 *      RESUMO ------------------------
 *
 *         Semelhante o padrao [ namespace ] porem nao cria um arquivo compilado
 *         tambem necessita de import no arquivo que se deseja utilizar um recurso
 *         de um arquivo exteno.
 *
 *         sintaxe de IMPORT e diferente do namespace .
 *
 *
 *      PALAVRAS_RESERVADAS ------------------------
 *
 *          [ export , import , default ]
 *
 *          export : deixa disponivel um recurso para acesso externo do arquivo.
 *          import : carrega recurso disponiveis do arquivo externo.
 *          default : pode ser utilizado apenas umas vez por modul ele vem apos a palavra export
 *
 *      BENEFICIOS ------------------------
 *
 *          - separar codigo em aquivos diferentes, de forma que fique
 *          mais claro e facil de encontrar.
 *
 *      SINTAXE ------------------------
 *
 *          import de export default :
 *          import import   nome_recurso  from  " ./caminho/arquivo_externo.ts" ;
 *
 *          import de export normal
 *          import { nome_recurso } from  " ./caminho/arquivo_externo.ts" ;
 *
 *          - nome_recurso :
 *          e oque esta disponivel de acesso no arquivo externo
 *

 * */
Object.defineProperty(exports, "__esModule", { value: true });
var modulo_soma_1 = require("./modulo_soma");
var modulo_circulo_1 = require("./modulo_circulo");
var modulo_soma_2 = require("./modulo_soma");
console.log('Calcular circunferencia', modulo_circulo_1.calc_circunferencia(250));
console.log('Calcular somar', modulo_soma_1.calc_soma(5, 250));
console.log("Utilizando export default: ", modulo_soma_2.default);
//# sourceMappingURL=modulos.js.map