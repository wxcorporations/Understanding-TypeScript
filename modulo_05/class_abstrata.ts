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


abstract class Projeto {
    protected nome_projeto: string = "Default";
    cotacao: number;

    cal_cotacao( valor : number):number {
        return valor * 2 ;
    }
    set valor_cotacao( valor : number ){
        this.cotacao = valor ;
    }
    get exibir_nome_projeto() : string {
        return this.nome_projeto ;
    }
    abstract definir_nome_projeto(nome: string): void ;

}

class Rollout extends Projeto {

    constructor(){
        super();
    };

    public definir_nome_projeto( nome : string ){
        if( nome.length > 5){
            this.nome_projeto = nome ;
        }
    }
}

let rollout_bradesco = new Rollout();

console.log( rollout_bradesco.cal_cotacao(1000) ); // metodo herdado da class Projeto
rollout_bradesco.definir_nome_projeto('Bradesco bbi');  //
console.log( rollout_bradesco.valor_cotacao = 20000 );
console.log( rollout_bradesco.exibir_nome_projeto );
