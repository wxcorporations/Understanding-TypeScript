

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

class Pessoa {
    public nome : string ;
    private rg : number ;
    private cpf : number ;

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
    private  exibir_rg() {
        console.log( this.rg );
    }
}

let fernando = new Pessoa('fernando jose ', 445556663 , 38011133354 );

fernando.exibir_cpf();
fernando.exibir_nome();
