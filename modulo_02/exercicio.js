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
var _this = this;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var bankAccountDaniel = {
    money: 1500,
    // EXEMPLO DE IMPLEMENTACAO ERRADA UTILIZANDO ARROW FUNC NO LUGAR DE FUNC
    deposit: function (value) {
        _this.money += value;
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
// valor nao sera atribuido a conta ja que implementacao esta errada
myself.bankAccount.deposit(10000);
console.log(daniel); // propriedade money continuara como o mesmo valor da implementacao 1500
//# sourceMappingURL=exercicio.js.map