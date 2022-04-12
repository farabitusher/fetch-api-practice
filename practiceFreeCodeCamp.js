class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit('Killer') 
console.log(killerRabbit.speak('meow'));
const squareList = arr => {
    // Only change code below this line
    let arrNew =[]
    arr.map(v=>{
        if (v > 0 && Number.isInteger(v) ) {
                arrNew.push(v*v)  
      }
    })
    return arrNew;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
//sorting problem solution

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArr = arr.slice()
  return newArr.sort((a,b) =>a-b)

  // Only change code above this line
}
console.log(nonMutatingSort([1, 30, 4, 21, 100000])); 
//string to array with spit method
const str = "Hello World";
const bySpace = str.split(" ");
bySpace

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
byDigits

//problem
function splitify(str) {
    // Only change code below this line
    return str.split(/\W/)
  
    // Only change code above this line
  }
  
  console.log(splitify("Hello World,I-am code"));