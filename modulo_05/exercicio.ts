// Exercise 1 - How was your TypeScript Class?
class Car {
    public _name : string ;
    public _acceleration : number = 0 ;

    constructor( name : string ) {
        this._name = name;
    };

    honk() : void {
        console.log('Toooooooooot!');
    };
    set add_acceleration(speed : number){
        this._acceleration += speed;
    };
    get exibir_acceleration(){
        return this._acceleration;
    }
}
var car = new Car("BMW");
car.honk();
console.log( car.exibir_acceleration );
car.add_acceleration = 300 ;
console.log( car.exibir_acceleration );



//Exercise 2 - Two objects, based on each other ...

abstract class Forma2d {
    protected  _width : number = 0;
    protected _length : number = 0;

    constructor( x : number , y : number ) {
        this._width = x ;
        this._length = y ;
    }
    set width( w : number){
        this._width = w ;
    }
    set length( l : number){
        this._length = l ;
    }
    abstract calc_area_quadrada( ) : number ;
}

class Retangulo extends Forma2d {
    constructor( x : number , y : number ){
        super( x , y );
    }

    public calc_area_quadrada(){
        return this._width * this._length ;
    }
}

let retangulo = new Retangulo( 10, 5 ) ;
retangulo.length = 20 ;
retangulo.width = 10 ;

console.log( '============================' );
console.log( retangulo.calc_area_quadrada() );



//Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)

class Person {
    private _firstName : string ;

    constructor(){}

    get firstName(){
        return this._firstName ;
    }
    set firstName( nome : string ){
        this._firstName = nome ;
    }
}

let fer = new Person();
fer.firstName = "Fernando jose";
console.log( fer.firstName );
fer.firstName = 'fernando j' ;
console.log( fer.firstName );
