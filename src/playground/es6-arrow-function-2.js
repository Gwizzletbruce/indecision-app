// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments)
    return a + b
}

console.log(add(55, 1))

//this keyword- no longer bound

const user = {
    name: "Andrew", 
    cities: ["Lymigton", "Southampton"],
    printPlacesLived () {
        const cityMessages = this.cities.map((city) => {
            return city + "!!"
        })
        return cityMessages
    }
}

console.log(user.printPlacesLived())

//challenge

const multiplier = {
    numbers: ["4", "6", "3", "2"],
    numberToMultiply: 2,
    multiply () {
        return this.numbers.map((nums) =>  nums * this.numberToMultiply) 
            
        
    }
}
console.log(multiplier.multiply())