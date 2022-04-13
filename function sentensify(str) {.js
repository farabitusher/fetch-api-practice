function sentensify(str) {
    // Only change code below this line
  
    return str.split(/\W/).join(" ");
    // Only change code above this line
  }
  
console.log(sentensify("May-the-force-be-with-you"));
const arr = ["Hello", "World"];
const str = arr.join(" ");
console.log(str)

//title problem
// Only change code below this line
function urlSlug(title) {
    let text = title.split(" ");
    // Remove the empty elements from the array
    let newText = text.filter(function(item){return item;});
    // oin the array with delimeter space
   return text = text.join(" ");
    
    }
    // Only change code above this line
  console.log(urlSlug(" Winter Is       Coming")); ;