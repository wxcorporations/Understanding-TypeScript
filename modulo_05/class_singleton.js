/*********************************************************************
 *                        SINGLETON
 *********************************************************************
 *
 *      SINGLETON
 *      - CLASSE QUE RETORNA A MESMA INSTANCIA
 *
 */
var OnlyOne = /** @class */ (function () {
    function OnlyOne(_name) {
        this._name = _name;
        this.name = _name;
    }
    // metodo statico nao pode ser acessado por instancia somente class Exemplo: Onlyone.getInstance()
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) { // verifica se a propriedade instance foi nao definida
            // cria uma instancia e atribui a propriedade instance que é statica
            // podemos ver que OnlyOne.instance e propriedade statica.
            OnlyOne.instance = new OnlyOne('intancia unica');
        }
        return OnlyOne.instance; // retorna referencia da instancia
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('instancia 1');
var right = OnlyOne.getInstance(); // pegando referencia da instancia atribuido para right :
var right2 = OnlyOne.getInstance();
console.log(right.name);
console.log(right2.name);
//# sourceMappingURL=class_singleton.js.map