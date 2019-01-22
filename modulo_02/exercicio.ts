/*
***************************************************
*       Converta o codigo es5 par typescript
* *************************************************

codigo :

let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

*/

// conversao para typescript
type bank = { money : number , deposit : (value : number)=> void };
type myself = { name : string , bankAccount : bank , hobbies : string[] };
type person = myself ;

let bankAccount : bank = {
    money : 2000 ,
    deposit : function ( value ) {
        this.money += value ;
    }
};
let bankAccountDaniel : bank = {
    money : 1500 ,
    // EXEMPLO DE IMPLEMENTACAO ERRADA UTILIZANDO ARROW FUNC NO LUGAR DE FUNC
    deposit : ( value )=>{
        this.money += value ;
    }
};
let myself : myself = {
    name : 'fernando' ,
    bankAccount : bankAccount ,
    hobbies : ['Combate militar', 'jogos fps']
};
let daniel : person = {
    name : 'daniel b' ,
    bankAccount : bankAccountDaniel,
    hobbies : ['montobike', 'game']
};


myself.bankAccount.deposit(3000 );
console.log( myself );

// valor nao sera atribuido a conta ja que implementacao esta errada
myself.bankAccount.deposit(10000 );
console.log( daniel );   // propriedade money continuara como o mesmo valor da implementacao 1500