"use strict"
/* ---------------------------------------------

    OOP - Object Oriented Programing

--------------------------------------------- */

/* ---------------------------------------------
    CLASSES
--------------------------------------------- */
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

//& Class Declaration: Class Tanımlama
// class PascalNamedClass { ... }

/*
const ExampleClass = class Car {

}

const Auto = class Auto {
   static propertyName = 'value'
}

console.log(Auto.propertyName)



const Car = class Car {
    static propertyName = 'value'
    constructor (param1, param2 = 'default-value') {
        this.param1 = param1
        this.param2 = param2
    }

    methodName1 () {
        return this
    }
}

//? INSTANCE: Class'tan üretilen nesnelere denir
const InstanceName = new Car ('test')
console.log(InstanceName);
console.log(InstanceName.methodName1());
*/

// Class Expression:
// const PascalNamedClass = class { ... }


//& constructor Method

/*
class Car {
    isRunning = false
    
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning= true
        return this.isRunning
    }
}


const Ford = new Car('Ford', 'Mustang', 1990)
console.log(Ford)

console.log(Ford.isRunning) //false
Ford.runEngine()
console.log(Ford.isRunning) //true

const Mazda = new Car('Mazda' ,'323', 2000)  //false
console.log('Mazda >>>', Mazda.isRunning)
Mazda.runEngine()
console.log('Mazda >>>', Mazda.isRunning) //true
*/

//& INHERITANCE -> miras alma. başka bir class'ın tüm özelliklerini devralma
// this = child class
// super = parent class

/*
class Vehicle {
    vehicleActive = false
    
    constructor (vehicleType) {
        this.vehicleActive= vehicleType
    }

    sayHi() {
        console.log('Hi')
    }
}

class Car extends Vehicle{
    isRunning = false
    
    constructor(brand, model, year, vehicleType='Car') {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning= true
    }
}

const Mercedes = new Car('Mercedes', 'E200', 2006)
console.log('all  >>>', Mercedes)
console.log(Mercedes.vehicleActive)
Mercedes.sayHi()





class Accessory extends Car {
       constructor(accessoryName, brand, model, year, vehicleType=true) {
        super (brand, model, year)
        this.accessoryName = accessoryName = accessoryName
       }
}
const FordClimate = new Accessory('Bosch Climate', 'Ford', 'Mustang', 1991)
console.log('all >>>', FordClimate)

*/


//& Polymorphism - yeniden yazabilme
//^override : önceki metodla aynı isim ve yapıda yeni bir metod oluşturma
//^overload : önceki metodla aynı adda fakat farklı yapıda yeni bir method oluşturma

/*
class Vehicle {
    vehicleActive = false
    constructor (vehicleType) {
        this.vehicleActive = vehicleType
    }

    getDetails () {
        console.log('Vehicle/getDetails started')
        return this
    }

    getType (vehicleType) {
        console.log(`'Vehicle type: ${this.vehicleType}`)
    }
}


class Car extends Vehicle {
    isRunning = false

    constructor(brand, model, year, vehicleType=true) {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Engine Started')
        return this.isRunning
    }

    getDetails() {
        console.log('Car/getDetails started')
    }

    getType (vehicleType, brand) {
        console.log(`vehicle/Brand type ${vehicleType} ${brand}`)
    }
}

const BMW = new Car ('BMW', '7.30i', 2021, 'Limusine')


//! sor ... getType neden undefined geldi... car ford onu overload yerine düzeltmiş gibi olmadı mı?
console.log(BMW)
BMW.getDetails()
BMW.getType('Car', 'Ford')
*/



//& Public & Private Properties
/*
class Vehicle {
    vehicleActive = false; // PUBLIC
    #abc // PRIVATE property
    _protectedProperty = 'limitid-access'; // PROTECTED

    constructor (vehicleType) {
        this.vehicleActive = vehicleType;
        console.log(this.#abc);
        console.log(this._protectedProperty);
    }
}

class Car extends Vehicle {
    isRunning = false
    
    constructor(brand, model, year, vehicleType= 'Car') {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Start Engine')
        console.log('privateProperty >>', this.vehicleActive)
    }

}


const Mercedes = new Car('Mercedes', 'M300', 2010, 'Truck')
//Mercedes.runEngine()

const vehicle = new Vehicle('Car')
console.log(vehicle.vehicleActive);
console.log(vehicle.privateProperty);
*/

/* --------------------------------------------- */
//? GETTER & SETTER METHODS: Görevi veri getirme (getter) ve veri güncelleme (setter) olan metodlardır.
//? "STATIC" KEYWORD: Class'dan direkt erişim. (Instance erişemez.)

/*
class Car {
    isRunning = false
    #price
    #color

    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('runEngine >> ','Start Engine')
        //return this.isRunning
    }

    set setPrice(price) {
        this.#price = price
        console.log('price update');
    }

    get getPrice() {
        return `price is ${this.#price}`
    }

    setColor(color) {
        this.#color = color
        console.log('color update');
    }

    getColor(){
        return `color is ${this.#color}`
    }
}

const Toyota = new Car('Toyota', 'Yaris', 2000)

console.log(Toyota);

Toyota.setPrice = 500
Toyota.setColor('mavi')

console.log(Toyota.getPrice);
console.log(Toyota.getColor());
*/

class KdvHesapla {
    #kdv

    constructor (fiyat) {
        this.fiyat = fiyat
    }

    set setKDV(kdvOrani) {
        this.#kdv = kdvOrani
    }

    get getKdvMiktari () {
        return this.fiyat * 100 / this.#kdv
    }

    get getKdvliFiyat () {
        return ((this.fiyat / 100) * this.#kdv) + this.fiyat
    }
}

const hesap = new KdvHesapla(100)

hesap.setKDV = 18

console.log(hesap.getKdvMiktari)
console.log(hesap.getKdvliFiyat)

console.log(hesap.staticProp);
console.log(KdvHesapla.staticProp);

//? ABSTRACTION: Soyutlama/Modelleme (Class ile obje üretebilme. Aynı amaç için kullanılan değişken ve methodların bir class içinde yazıyor olması)
//? ENCAPCULLATION: Kapsülleme/Ayrıştırma (Kodların gizliliği, private değişkenlere erişilemiyor olması ve birbirinden bağımsız çalışmaları.)
/* ------------------------------------------------------- */

