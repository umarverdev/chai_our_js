// STACK (primitive datatypes) yaha sy copy melta hai, HEAP (Non-primitive datatypes) or yahan sy refrence


// Example of Stack. which create a copy 


let MyFacebookName = "Muhammad"

let anotherName = MyFacebookName
anotherName = "umar"

console.log(anotherName)
console.log(MyFacebookName)


// Example of heap which take refrence 

let userOne = {
    email:"muhammadumar0563@gmail.com",
    userName : "umar563"
}

let userTwo = userOne


console.log(userOne)

userTwo.email ="umar563@gmail.com"

console.log(userOne)
console.log(userTwo)