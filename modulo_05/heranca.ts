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

// SUPER-CLASS
class Pessoa2 {
    public nome : string ;
    private rg : number ;
    protected cpf : number ;

    constructor( nome : string , rg : number , cpf : number ){
        this.nome = nome ;
        this.cpf = cpf ;
        this.rg = rg ;
    }

    public exibir_nome() {
        console.log(this.nome);
    }
    public exibir_cpf() {
        console.log( this.cpf );
    }
    protected  exibir_rg() {
        console.log( this.rg );
    }
}


// SUB-CLASS
class Developer extends Pessoa2{
    private linguagem : string  ;
    constructor( nome : string , rg : number , cpf : number , linguagem : string = 'c'){
        super(nome, rg, cpf);  // RECEBEU DO CONTRUTOR FILHO PARAN NECESSARIOS.
        this.linguagem = linguagem ;
    }

     public exibir_linguagem() : void {
        console.log( this.linguagem );
    }
    public exibir_cpf_desenvolvedor() : void {
        this.exibir_cpf();
    }
}

let daniel_dev = new Developer('Daniel barros', 452623562 , 33315428956, 'java');

daniel_dev.exibir_nome();
// daniel_dev.exibir_cpf();
daniel_dev.exibir_linguagem();
daniel_dev.exibir_cpf_desenvolvedor();
