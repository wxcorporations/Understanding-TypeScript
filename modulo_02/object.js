/*
  ALIAS
    podemos utilizar a palavar reservada  [ type ]  pra criar um alias de tipo complexo

  OBJETO ------------
  NAO SE UTILIZA O OPERADOR IGUAL PARA DECLARA OBJETOS. COMO PODEMOS VER NOS EXEMPLO ANTERIORES
  TODA DECLARACAO DE TIPO VEM APOS NOME DA VARIAVEL SEGUIDO DE EXE. LET VARIAVEL : TIPO E {} E
  A FORMA QUE DECLARAMOS OBJETOS.
*/
var carro = {
    modelo: 'uno ',
    ano: 2006
};
// OBJETOS COMPLEXOS
// parametro deve declarado com seu tipo
/******************************************************************************
 *
    DECLARANDO TIPO FUNCTION

   OBS : DEVE-SE TOMAR CUIDADO NA HORA DE CRIAR FUNCOES DENTRO DO OBJETO
   POIS TEMOS FUNCOES E ARROW FUNCTION QUE SAO BEM SIMILAR MAS COM PEQUENAS
   DIFERENCAS COMO A PROPRIEDADE THIS. PASSANDO ARROW FUNCTION DENTRO DO
   OBJETO ELE IRA PEGAR REFERENCIA DO THIS DE FORA DO OBJETO.

*******************************************************************************/
var carro_eletrico = {
    motor: {
        nome: 'est'
    },
    taxa: [0.5, 0.9],
    // CASO A FUNCAO ABAIXO REALIZASSE ALGUMA ALTERACAO NAS PROPRIEDADES  INTERNAS DO OBJ
    // UTILIZANDO THIS ELA NAO PODERIA SER UMA ARROW FUNCTION POIS O THIS IRIA APONTAR
    // PARA ESCOPO EXTERNO DO OBJETO;
    calc: function (v1, v2) {
        return v1 + v2;
    }
};
console.log(carro_eletrico.motor.nome);
console.log(carro_eletrico.taxa[0]);
console.log(carro_eletrico.calc(10, 25));
var carro_eletrico_alias = {
    motor: { nome: '1500w' },
    taxa: [1, 10],
    calc: function (v1, v2) {
        return v1 + v2;
    }
};
console.log(carro_eletrico_alias.motor.nome);
console.log(carro_eletrico_alias.taxa[1]);
console.log(carro_eletrico_alias.calc(10, 25));
