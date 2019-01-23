/****************************************************************
 *              metodos get e set
 ***************************************************************
 *
 *       SET -------------------
 *      - aceita apenas um parametro.
 *      - acessivel como uma propriedade.
 *      - nao aceita parenteses.   Exemplo :   obj.metodo_set = valor
 *
 *       GET -------------------
 *      - acessivel como uma propriedade.
 *      - nao aceita parenteses.   Exemplo :   obj.metodo_get
 *
 * */
var Pessoas = /** @class */ (function () {
    function Pessoas() {
    }
    ;
    Object.defineProperty(Pessoas.prototype, "registrar_cpf", {
        set: function (numero) {
            if (numero.toString().length == 11) { // validacao de qtd caracteres
                this.cpf = numero;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Pessoas.prototype, "exibir_cpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Pessoas;
}());
var fej = new Pessoas();
console.log(fej); // obj vazio
fej.registrar_cpf = 11111111111;
console.log(fej); // obj com prop cpf + valor.
console.log(fej.exibir_cpf); // valor da prop cpf do obj fej.
//# sourceMappingURL=class_get_set.js.map