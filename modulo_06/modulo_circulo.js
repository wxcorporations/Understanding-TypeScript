"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PI = 3.14; // nao e importado pois nao possui palavar reservada export
// funcao abaixo sera visivel por arquivos externos via import ja que definimos como export .
function calc_circunferencia(diametro) {
    return diametro * PI;
}
exports.calc_circunferencia = calc_circunferencia;
//# sourceMappingURL=modulo_circulo.js.map