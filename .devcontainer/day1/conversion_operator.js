let score=33
//console.log(typeof score)//datatype checking

let score1="Hello"
//console.log(typeof(score1))

let score2="33abc"
let ValueInNumber=Number(score2)//datatype conversion
// console.log(typeof(ValueInNumber))
// console.log(ValueInNumber)

let score3=null
let ValueInNumber1=Number(score3)
console.log(typeof(score3))
console.log(ValueInNumber1)

let score4=undefined
let ValueInNumber2=Number(score4)
console.log(ValueInNumber2)

let score5=true
let ValueInNumber3=Number(score5)
//console.log(ValueInNumber3)

// "33"=>33
// "33abc"=>NaN
// null =>0
// undefined => Nan
// true => 1 | false => 0
// "" =>false| "msg" =>true