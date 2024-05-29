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

class Car {
    isRunning = false
    
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning= true
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