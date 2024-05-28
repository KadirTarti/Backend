"use strict"

console.log("**2112");


//&      OOP (Object Oriented Programming)

//^ OJBECTS

const camelCaseNameOnject = { 
    propertyName: 'value',
    methodName: function () {
        return 'this is a method.'
    }
}
console.log('full function:', camelCaseNameOnject);
console.log('propertyName:', camelCaseNameOnject.propertyName)

const Car = {
    brand: 'Opel',
    model: 'Astra',
    year: 2005,
    colors: ['gray', 'blue', 'metalic blue'],
    startEngine: function () {
        return 'Engine started.'
    },
    details: {
        color: 'red',
        engineSize: 1998
    }
}
console.log(Car)
console.log('Car.startEngine() >>>', Car.startEngine() )
console.log('Car Color - blue >>>', Car.colors[1])
console.log('engineSize >>>', Car.details.engineSize)


//^ THIS keyword

const user = {
    name: 'Test',
    surname: 'User',
    fullName: function () {
    //    return name + surname // >>  çalışmaz 
    return this.name + ' ' + this.surname  // >>  Test User
    }

}
console.log(user)
console.log(user.fullName()) // hata 

//^ ARRAY Destructuring
