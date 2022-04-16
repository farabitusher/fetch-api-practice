const obj = {
    name: 'farabi',
    age: 23,
    job: 'student',
    hobby:'photography'
}
for (const key in obj) {
    console.log(obj[key]);

}
for (const [key, value] of Object.entries(obj)) {
    console.log(key,value);
}
Object.freeze(obj)
delete obj.age
obj.case = 'alien'
console.log(obj);