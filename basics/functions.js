// non-primitive -> array, objects and functions

// function defination
function sayHi(param) {
    // console.log(param);
    // return "Ayush is genius"
    let rVal = Math.random() > 0.5 ? true : "less than 0.5"; 
    return rVal;
}

// function call
// sayHi(10);
let val = sayHi("params");
console.log(val);
// sayHi([10, 1, 2, 3]);

// there is no return type in function we can return any value here 
// there is no need to define data type to paramater 