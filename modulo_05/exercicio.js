var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercise 1 - How was your TypeScript Class?
var Car = /** @class */ (function () {
    function Car(name) {
        this._acceleration = 0;
        this._name = name;
    }
    ;
    Car.prototype.honk = function () {
        console.log('Toooooooooot!');
    };
    ;
    Object.defineProperty(Car.prototype, "add_acceleration", {
        set: function (speed) {
            this._acceleration += speed;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Car.prototype, "exibir_acceleration", {
        get: function () {
            return this._acceleration;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.exibir_acceleration);
car.add_acceleration = 300;
console.log(car.exibir_acceleration);
//Exercise 2 - Two objects, based on each other ...
var Forma2d = /** @class */ (function () {
    function Forma2d(x, y) {
        this._width = 0;
        this._length = 0;
        this._width = x;
        this._length = y;
    }
    Object.defineProperty(Forma2d.prototype, "width", {
        set: function (w) {
            this._width = w;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Forma2d.prototype, "length", {
        set: function (l) {
            this._length = l;
        },
        enumerable: true,
        configurable: true
    });
    return Forma2d;
}());
var Retangulo = /** @class */ (function (_super) {
    __extends(Retangulo, _super);
    function Retangulo(x, y) {
        return _super.call(this, x, y) || this;
    }
    Retangulo.prototype.calc_area_quadrada = function () {
        return this._width * this._length;
    };
    return Retangulo;
}(Forma2d));
var retangulo = new Retangulo(10, 5);
retangulo.length = 20;
retangulo.width = 10;
console.log('============================');
console.log(retangulo.calc_area_quadrada());
//Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (nome) {
            this._firstName = nome;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var fer = new Person();
fer.firstName = "Fernando jose";
console.log(fer.firstName);
fer.firstName = 'fernando j';
console.log(fer.firstName);
//# sourceMappingURL=exercicio.js.map