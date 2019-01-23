/*********************************************************************
 *                        SINGLETON
 *********************************************************************
 *
 *      SINGLETON
 *      - CLASSE QUE RETORNA A MESMA INSTANCIA
 *
 */

class OnlyOne {
    // criando uma propriedade instance statica dessa forma ela fica armazenada na classe
    private static instance : OnlyOne ;
    public readonly name: string ;

    private constructor( public _name : string ) {  // por ser privado nao me permite criar uma istancia
        this.name = _name ;
    }

    // metodo statico nao pode ser acessado por instancia somente class Exemplo: Onlyone.getInstance()
    static getInstance() {   // este metodo retorna uma instancia da propria class
        if( !OnlyOne.instance ){  // verifica se a propriedade instance foi nao definida
            // cria uma instancia e atribui a propriedade instance que é statica
            // podemos ver que OnlyOne.instance e propriedade statica.
            OnlyOne.instance = new OnlyOne('intancia unica');
        }
        return OnlyOne.instance ;  // retorna referencia da instancia
    }
}

// let wrong = new OnlyOne('instancia 1');
let right = OnlyOne.getInstance();  // pegando referencia da instancia atribuido para right :
let right2 = OnlyOne.getInstance();

console.log(right.name);
console.log(right2.name);