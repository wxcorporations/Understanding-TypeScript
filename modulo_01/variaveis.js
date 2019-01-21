/*
    Declaracao de variaveis com tipo statico
    ------------------------------------------------------------
    - TODA VARIAVEL DEVE SER DECLARADO O TIPO APOS SEU NOME

    TIPOS DISPONIVEIS
    ------------------------------------------------------------
    - STRING  - NUMBER  - BOOLEAN  - ARRAY  - SYMBOL  - OBJECT
 */
// STRING ------------
var str = "Valor da string";
// NUMBER ------------
// OBS : SERVE PRA QUALQUER TIPO DE NUMERO SEJA INTEIRO, FLOAT, DECIMAL .
var num = 200.00;
// TUPLA ------------
// OBS : TIPOS TUPLA ARRAY DEVEM SEGUIR COM A MESMA SEQUENCIA DE TIPOS NA DECLARACAO .
var tupla = ['fernando', 30, true];
// ARRAY ------------
// DECLARACAO DE UM ARRAY DE STRING COM PERMITE MUTIPLOS VALORES .
var arr = ['fernando', 'daniel'];
// DECLARACAO DE UM ARRAY DE STRING COM UM UNICO VALOR .
var arr_str = ['fernando'];
// BOOLEAN ------------
// OBS : NAO ACEITA VALORES 0 OU 1 ;
var verdadeiro = true;
// ENUM ------------
// Enum cada prop do objeto sera conhecido como um numero sequencial iniciado no 0 .
// caso atribuirmos algum valor numerio para uma propriedade, a propriedade seguinte
// tera o valor seguindo ao que foi atribuido sempre incremental.
var lista_num;
(function (lista_num) {
    lista_num[lista_num["iten1"] = 0] = "iten1";
    lista_num[lista_num["iten2"] = 1] = "iten2";
    lista_num[lista_num["iten3"] = 101] = "iten3";
    lista_num[lista_num["iten4"] = 102] = "iten4"; // 102
})(lista_num || (lista_num = {}));
console.log(lista_num.iten1);
console.log(lista_num.iten2);
console.log(lista_num.iten3);
console.log(lista_num.iten4);
// ANY -----------
// ESTE TIPO PERMITE QUE NOSSA VARIAVEL SE MANTENHA COM O TIPO DINAMICO PERMITINDO QUALQUE TIPO
var moto = "cg-2018";
console.log(moto);
moto = 500;
console.log(moto);
moto = ['nx-250', 500, 2018];
console.log(moto[0]);
