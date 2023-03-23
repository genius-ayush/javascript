// array declare
// let arr =[] ;
// console.log(array.length);
// let i = 0;
// while (i < array.length) {
    //     console.log("elem at idx" , i , " is " , array[i])
    //     i++
    // }
    
    let array = [1, 2, 3, 4, 5];
    console.log(array);

array.push("last value"); // add at last
array.unshift("first value") // add at first 
console.log("~~~~~~~~~~~~~");

array.pop(); // remove last elememt
array.shift(); // remove first element

let partOfAnArray = array.slice(2, 4);
console.log(partOfAnArray);

// splice is the inhanced version of delete in array in which we can delete the elements of any count

array.splice(2, 3); 
console.log(array);  
//idex of 
// contains
    