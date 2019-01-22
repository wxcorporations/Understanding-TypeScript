/**************************************
*       CLASS COM TYPESCRIPT          *
****************************************/
/*
RECURSOS DISPONIVEIS
-------------------------------
    - MODIFICADORES DE ACESSO
    - METODO CONSTRUCTOR


MODIFICADOR DE ACESSO
-------------------------------
    -PUBLIC    -PRIVATE    -PROTECTED    -STATIC
    PODEMOS ALTERAR VISIBILIDADE DE PROPRIEDADES E METODOS DE UMA CLASS


METODO CONSTRUTOR
-------------------------------
    METODO SERVE DE COPIA PARA UMA NOVA INSTANCIA
    TODAS INSTANICIAS TERAM ESTES ATRIBUTOS DEFINIDOS INTERNAMENTE ;

 */
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, rg, cpf) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
    }
    Pessoa.prototype.exibir_nome = function () {
        console.log(this.nome);
    };
    Pessoa.prototype.exibir_cpf = function () {
        console.log(this.cpf);
    };
    Pessoa.prototype.exibir_rg = function () {
        console.log(this.rg);
    };
    return Pessoa;
}());
var fernando = new Pessoa('fernando jose ', 445556663, 38011133354);
fernando.exibir_cpf();
fernando.exibir_nome();
//# sourceMappingURL=class.js.map