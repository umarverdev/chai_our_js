const name ="Umar"
const repoCount = 22

console.log(name + repoCount + "value") // not prefer this use backtacks   ``

// like that 


console.log(`hello my name is ${name} and my  repoCount is ${repoCount}`)

const gameName = new String('Muhammadumar')

//console.log(gameName[0])
//console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("a"))


const newName =gameName.substring(0,8)

console.log(newName)

const anotherName = gameName.slice(-11,4)

console.log(anotherName)



const newString2= "   umar   "

console.log(newString2)
console.log(newString2.trim())  //stripped whitespace  starting and end

const url = "https://umar.com/umar%20khan"

console.log(url.replace('%20','-'))

const splitName= "muihammad-umar"

console.log(splitName.split('-'))
