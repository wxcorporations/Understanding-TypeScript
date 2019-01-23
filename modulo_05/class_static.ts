
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

class Carro {
    static registro_producao : number = 0 ;
    constructor(){};
    // outros metodos

    static increment_registro_producao() : void{
        this.registro_producao++ ;
    }

}

console.log( Carro.registro_producao );
Carro.increment_registro_producao();
console.log( Carro.registro_producao );
