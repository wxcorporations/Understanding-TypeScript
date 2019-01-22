/*
***************************************************
*       Converta o codigo es6 par typescript
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
var _this = this;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        return this.money += value;
    }
};
var bankAccountDaniel = {
    money: 1500,
    // EXEMPLO DE IMPLEMENTACAO ERRADA UTILIZANDO ARROW FUNC NO LUGAR DE FUNC
    deposit: function (value) {
        return _this.money += value;
    }
};
var myself = {
    name: 'fernando',
    bankAccount: bankAccount,
    hobbies: ['Combate militar', 'jogos fps']
};
var daniel = {
    name: 'daniel b',
    bankAccount: bankAccountDaniel,
    hobbies: ['montobike', 'game']
};
myself.bankAccount.deposit(3000);
console.log(myself);
// valor nao sera atribuido a conta pois implementacao esta errada
myself.bankAccount.deposit(10000);
console.log(daniel); // propriedade money continuara como o mesmo valor da implementacao 1500
