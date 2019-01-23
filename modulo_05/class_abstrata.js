/******************************************************************
 *                    CLASS E METODOS ABSTRATOS
 ******************************************************************
 *
 *      ABSTRACT CLASS :
 *      - classe abstrata sao modelo que devem ser extendidos para subclass.
 *      - nao permite ser instanciada
 *      - sub-classe herdao propriedade normalmente
 *      - somente metodos abstratos deveram ser implementados nas sub-classe
 *
 *      METODO ABSTRADO
 *      - forca sub-classe criarem sua propria implementacao do metodo.
 *
 *
 * */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Projeto = /** @class */ (function () {
    function Projeto() {
        this.nome_projeto = "Default";
    }
    Projeto.prototype.cal_cotacao = function (valor) {
        return valor * 2;
    };
    Object.defineProperty(Projeto.prototype, "valor_cotacao", {
        set: function (valor) {
            this.cotacao = valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Projeto.prototype, "exibir_nome_projeto", {
        get: function () {
            return this.nome_projeto;
        },
        enumerable: true,
        configurable: true
    });
    return Projeto;
}());
var Rollout = /** @class */ (function (_super) {
    __extends(Rollout, _super);
    function Rollout() {
        return _super.call(this) || this;
    }
    ;
    Rollout.prototype.definir_nome_projeto = function (nome) {
        if (nome.length > 5) {
            this.nome_projeto = nome;
        }
    };
    return Rollout;
}(Projeto));
var rollout_bradesco = new Rollout();
console.log(rollout_bradesco.cal_cotacao(1000)); // metodo herdado da class Projeto
rollout_bradesco.definir_nome_projeto('Bradesco bbi'); //
console.log(rollout_bradesco.valor_cotacao = 20000);
console.log(rollout_bradesco.exibir_nome_projeto);
//# sourceMappingURL=class_abstrata.js.map