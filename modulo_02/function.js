/**********************************
 FUNCOES EM TYPESCRIPT
 **********************************/
//  - DEVE-SE PASSAR O TIPO DE RETORNO CASO TENHA RETORNO  [ : TIPO ]
//  - SE A FUNCAO NAO POSSUIR RETORNO DEVE SE PASSAR O VALOR   [ : VOID ]
//  - TODOS PARAMETROS DA FUNCAO DEVE POSSUIR UM TIPO [ STRING , NUMBER , NUM , {} , ARRAY , TUPLA  ...]
/***********************************
 FUNCOES COM RETORNO
 **********************************/
// SINTAXE 1
//-----------------------------------------
function fun_typescript() {
    return 'retorno de string'; // <-  CASSO RETORNO SEJA DIFERENTE DE STRING EXIBIRA UM ERRO
}
console.log(fun_typescript());
// SINTAXE 2
//-----------------------------------------
var func_typescript = function () {
    return 'retorno de string sintaxe 2';
};
console.log(func_typescript());
/***********************************
 FUNCOES SEM RETORNO  [ : VOID ]
 **********************************/
var soma = 0;
var func_types = function (v1, v2) {
    soma = v1 + v2;
};
func_types(5, 10);
console.log(soma);
/***********************************
 PARAMETROS
 **********************************/
function exibir_infor(nome, idade) {
    return nome + '' + idade;
}
console.log(exibir_infor('fernando j', 29));
