//reduce method is so fun and easy
const people = [
    { id:'1', name:'farabi',age:24},
    { id:'2', name:'fahim',age:23},
    { id:'3', name:'yasin',age:29}
] 
let result;
//count
// result = people.reduce((acc, person) => {
    
//     acc.push(person.age)
//     return acc

// },[])
// console.log(result)
// console.log(8 + 4);

//making the array of obj to obj of obj with id keys
result = people.reduce((acc, person) => {
    return {
        ...acc,
        [person.id] :person
}
},{})
console.log(result)
console.log(result["1"]);

//find the max value
result = people.reduce((acc, person) =>  acc > person.age?acc:person.age, 0)
console.log(result)
//find the min value
result = people.reduce((acc, person) => {
    if (person.age < acc) return person.age;
    return acc
})
console.log(result)