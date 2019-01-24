/**********************************************************************
 *
 *                      NAMESPACE
 *
 **********************************************************************
 *
 *      Namespace e uma forma de modularizar o codigo em um mesmo
 *      arquivo, mas o typescript nos permite criar namespace em
 *      arquivos separados que pertencao ao mesmo name space para
 *      isso utilizamos sintaxe de import e rodamos um comando no
 *      terminal.
 *
 *      BENEFICIOS ---------------------------
 *
 *      - Agrupar codigos com o mesmo dominio.
 *      - Encapsular codigo evitaando escopo global.
 *      - Manter regra de negocio oculta.
 *
 *      IMPORT ---------------------------
 *
 *          SINTAXE : /// <reference path="nome_do_arquivo_que_deseja_agrupar" />
 *
 *          deve ser utilizado no aquivo no qual deseja ser importado
 *
 *
 *       COMANDO-TERMINAL ---------------------------
 *
 *         tsc --outFile nome_arquivo_externo.ts  nome_arquivo_externo.ts   nome_arq_compilado.ts
 *
 *         tsc --outFile  nome_arquivo  <- dessa forma tem que utilizar a sintaxe de importe no
 *         arquivos extenos
 *
 *         Exemplo: tsc --outFile  camino/nome_arquivo.ts ...aqui podemos passar todos arquivos
 *         na ordem, dessa forma nao ha necessidade de marcar o arquivos com sintaxe de import.
 *
 *
 *      RESUMO ---------------------------
 *
 *          - devemos utilizar sintaxe de import no arquivo que desejamos importar
 *          - rodar o comando:   tsc [ nome_arquido_com_imports.ts }  --outFile  [nome_arq_saida_compil.js]
 *
 * */
var Cal;
(function (Cal) {
    var PI = 3.14;
    function calc_circuferencia(diametro) {
        return diametro * PI;
    }
    Cal.calc_circuferencia = calc_circuferencia;
})(Cal || (Cal = {}));
//# sourceMappingURL=namespace_part1.js.map