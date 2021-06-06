var nameVar = "luke"

console.log("nameVar", nameVar)

let nameLet = "LUNIS"

console.log("nameLet", nameLet)

const nameConst = "Frank"

console.log("nameConst", nameConst)


//block scoping (let const are block scoped so 
//not accessible outside conditions or loops [var is])

var fullName = "Andrew Mead"

//declare let const outside if statements and loops

if (fullName) {
    let firstName = fullName.split(" ")[0]
    console.log(firstName)
}