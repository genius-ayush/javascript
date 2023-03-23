let singleQuotes = 'single quotes ki string'; 
let doubleQuotes = "double quotes ki string"; 

console.log(singleQuotes);
console.log(doubleQuotes); 
let char = singleQuotes.charAt(4);
let ascii = singleQuotes.charCodeAt(4); 
let substr = doubleQuotes.substring(2, 4);
console.log(char);
console.log(substr);
console.log(ascii);  


// split
let arrStr = singleQuotes.split(" ");
console.log(arrStr);

// join

let str = arrStr.join("$");
console.log(str); 

// trim

singleQuotes = singleQuotes.trim(); // trim or delete extra spaces fri front and end from the string. 