class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, degree) {
        super(name, age)
        this.degree = degree

    }
    hasDegree() {
        return !!this.degree //double not operator to flip undefined to false boolean
    }
    getDescription() {
        let description = super.getDescription()
        

        if (this.hasDegree()) {
            description += ` and their degree is ${this.degree}`
            
        }
        return description
    }
}

class Traveller extends Person {
    constructor(name, age, degree, location) {
        super(name, age, degree)
        this.location = location
    }
    getGreeting() {
        let greeting = super.getGreeting()

        if(this.location) {
            return `${greeting} I am visiting from ${this.location}`
        } else {
            return `${greeting}`
        }
        
    }
    
    
}

const me = new Traveller("Luke Nisbet", 25, "Computer Science", "Southampton")
console.log(me.getGreeting())


const other = new Traveller()
console.log(other.getGreeting())
