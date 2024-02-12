const myarry = [0,1,2,3,4,5]
console.log(myarry[1])

const myheros = ["shaktimaan", "naagraj" ]

const myaar2 = new Array(1,2,3,4)
//  array methods

myarry.push(6)
console.log(myarry)

myarry.pop()
console.log(myarry)

myarry.unshift(9)
console.log(myarry)

myarry.shift()
console.log(myarry)

console.log(myarry.includes(9))

console.log(myarry.indexOf(9))
console.log(myarry.indexOf(3))

const newarr = myarry.join()
console.log(myarry)
console.log(typeof(newarr)) // string

//  slice , splice

console.log("A", myarry)

const myn1 = myarry.slice(1,3) // dont change orignal array 

console.log(myn1)

console.log("b", myarry)

const myn2 = myarry.splice(1,3)   // changes orignal array
console.log("c", myarry)

console.log(myn2)
