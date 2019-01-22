/**************************************************
 *                   HERANCA
 **************************************************
 *
 *     PODEMOS HERDAR DE UMA CLASS UTILIZANDO PALAVRA RESERVADA EXTENDS
 *     E TAMBEM DEVEMOS PASSAR O METODO SUPER DENTRO DO CONTRUTOR DA
 *     CLASS FILHA
 *
 *     METODO SUPER IRA RECERTODOS OS PARAMETROS NESCESSARIOS DA CLASSE PAI
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
// SUPER-CLASS
var Pessoa2 = /** @class */ (function () {
    function Pessoa2(nome, rg, cpf) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
    }
    Pessoa2.prototype.exibir_nome = function () {
        console.log(this.nome);
    };
    Pessoa2.prototype.exibir_cpf = function () {
        console.log(this.cpf);
    };
    Pessoa2.prototype.exibir_rg = function () {
        console.log(this.rg);
    };
    return Pessoa2;
}());
// SUB-CLASS
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(nome, rg, cpf, linguagem) {
        if (linguagem === void 0) { linguagem = 'c'; }
        var _this = _super.call(this, nome, rg, cpf) || this;
        _this.linguagem = linguagem;
        return _this;
    }
    Developer.prototype.exibir_linguagem = function () {
        console.log(this.linguagem);
    };
    Developer.prototype.exibir_cpf_desenvolvedor = function () {
        this.exibir_cpf();
    };
    return Developer;
}(Pessoa2));
var daniel_dev = new Developer('Daniel barros', 452623562, 33315428956, 'java');
daniel_dev.exibir_nome();
// daniel_dev.exibir_cpf();
daniel_dev.exibir_linguagem();
daniel_dev.exibir_cpf_desenvolvedor();
//# sourceMappingURL=heranca.js.map