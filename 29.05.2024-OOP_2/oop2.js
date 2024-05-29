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

