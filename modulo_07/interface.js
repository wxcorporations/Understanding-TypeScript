/************************************************************
 *
 *                      INTERFACE
 *
 ************************************************************
 *
 *      - nao sao compiladas para javascript, elas so servem para impedir
 *      codigo seja compilado caso nao siga estrutura definida por ela
 *
 *      - nao possui logica na sua estrutura
 *
 *      - serve de contrato para que todos que recebam essa interface siga
 *      sua estrutura.
 *
 *      - podemos passar inteface para : Porpriedade , metodos e classe .
 *
 *
 *      RESUMO -------------------
 *
 *          conceito parecido com class abstrata  mudando que nao possui
 *          logica ( codigo ) sendo somente como uma regra a ser seguida
 *          pela classe que implemente tal interface.
 *
 *      SINTAXE -------------------
 *
 *          Palavra reservada :  interface
 *          exemplo :  interface nome_da_interface { propriedade }
 *
 *          pode possuir diversos propriedade e todas devem ser implementadas
 *
 *
 * */
var Aluno = /** @class */ (function () {
    // Estudante obriga aluno implementar todas prorpiedade dele.
    // menos idade que e uma propriedade nao obrigatoria.
    function Aluno(nome, tel, email) {
        this.nome = nome;
        this.tel = tel;
        this.email = email;
    }
    ;
    Aluno.prototype.registro = function () {
        console.log('Registro do aluno e :', Math.random() * 1000);
    };
    return Aluno;
}());
var Aluno_facudade = /** @class */ (function () {
    function Aluno_facudade(_nome, _periodo, _semestre, _total_semestre, _turma) {
        this.nome = _nome;
        this.periodo = _periodo;
        this.semestre = _semestre;
        this.total_semestre = _total_semestre;
        this.turma = _turma;
    }
    Aluno_facudade.prototype.tcc = function () {
        return this.semestre === this.total_semestre ? true : false;
    };
    return Aluno_facudade;
}());
var aluno = new Aluno('fernando', 36022222, 'ad@gmail.com');
console.log(aluno);
var universitario = new Aluno_facudade('fernando j', 'noturno', 6, 6, '5am');
console.log(universitario);
console.log(' Aluno : ', universitario.nome, 'possui tcc ? ', universitario.tcc());
// Passando a interface Pessoa como tipo do meu parametro sou obrigado a implementar toda sua
// estrutura, assim evitando passar um obj pessoa que nao tenha possivel parametro.
function infor_pessoa(pessoa) {
    pessoa.dados.forEach(function (item) { return console.log(item); });
}
var dan = {
    nome: 'Daniel b',
    dados: ['soldado', 'pe', 'osasco']
};
var fer_teste = {
    nome: 'Fernando jose gomes',
    dado: 'erro tem que ser um array'
};
infor_pessoa(dan);
//infor_pessoa( fer_teste ); // gera um erro pois o objeto passado nao possui array dados
//# sourceMappingURL=interface.js.map