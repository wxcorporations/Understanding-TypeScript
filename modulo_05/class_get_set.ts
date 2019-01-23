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

class Pessoas {
    private nome : string ;
    private cpf : number ;

    constructor(){};

    set registrar_cpf( numero : number ) {
        if ( numero.toString().length == 11 ) { // validacao de qtd caracteres
            this.cpf = numero;
        }
    };
    get exibir_cpf() {
        return this.cpf ;
    };
}
let fej = new Pessoas() ;
console.log(fej); // obj vazio

fej.registrar_cpf = 11111111111;

console.log(fej); // obj com prop cpf + valor.
console.log( fej.exibir_cpf ) ;   // valor da prop cpf do obj fej.