/***************************************************************
 *
 *             PROPRIEDADE E MEDOTOS STATICOS
 *
 ***************************************************************
 *
 *      STATIC Palavra reservada que pode anteceder metodos ou propriedades.
 *
 *      FINALIDADE :
 *          criar metodos ou propriedade que pertenca a class, dessa
 *          forma para sua utilizacao nao a necessidade de uma instancia
 *
 *          Exemplo :   Empresa.total_funcionario
 *
 *      SINTAXE :
 *          static propri1 : string = "valor_propriedade' ;
 *          static metodo( paran1 : string ) : string { return paran1 };
 *
 * */
var Carro = /** @class */ (function () {
    function Carro() {
    }
    ;
    // outros metodos
    Carro.increment_registro_producao = function () {
        this.registro_producao++;
    };
    Carro.registro_producao = 0;
    return Carro;
}());
console.log(Carro.registro_producao);
Carro.increment_registro_producao();
console.log(Carro.registro_producao);
//# sourceMappingURL=class_static.js.map