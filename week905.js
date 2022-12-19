//4.Retrun a function
function add(a1, b1 = 10) { //add (a1, b1)เรียกว่า paramenters
    const a = a1
    const b = b1
    return a + b
}
//called a function
const sum = add(15, 10) //add(15,10)เรียกว่า arguments
console.log(sum)
console.log(add(add))///arguments