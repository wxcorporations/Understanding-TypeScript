var Cal;
(function (Cal) {
    var PI = 3.14;
    function calc_circuferencia(diametro) {
        return diametro * PI;
    }
    Cal.calc_circuferencia = calc_circuferencia;
    function calc_soma(num1, num2) {
        return num1 + num2;
    }
    Cal.calc_soma = calc_soma;
})(Cal || (Cal = {}));
//# sourceMappingURL=namespace.js.map