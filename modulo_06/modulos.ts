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
 *          [ export , import ]
 *
 *          export : deixa disponivel um recurso para acesso externo do arquivo.
 *          import : carrega recurso disponiveis do arquivo externo.
 *
 *      BENEFICIOS ------------------------
 *
 *          - separar codigo em aquivos diferentes, de forma que fique
 *          mais claro e facil de encontrar.
 *
 *      SINTAXE ------------------------
 *
 *          import { nome_recurso } from  " ./caminho/arquivo_externo.ts" ;
 *
 *          - nome_recurso : e oque esta disponivel de acesso no arquivo externo
 *

 * */


import { calc_soma } from "./modulo_soma" ;
import { calc_circunferencia } from "./modulo_circulo";

console.log('Calcular circunferencia' , calc_circunferencia(250) ) ;
console.log( 'Calcular somar' , calc_soma(5 ,250) ) ;