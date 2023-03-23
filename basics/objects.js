// object-> group of key : value pair
// Key : value-> property
// key : function -> method
let cap = {
    name : "Steve",
    lastName: "Rogers",
    address: {
        city: "Something",
        state: "pata nee"
    },
    age: 35,
    isAvenger: true,
    movies: ["first Avenger", "winter soldier", "civil war"],
    sayHi: function() {
        console.log("Cap say's Hii");
    }
}
// // get
// console.log(cap.name);
// console.log(cap.lastName);
// console.log(cap.movies[1])
// cap.sayHi();
// console.log(cap);
// console.log('````````````````````````')

// // SET / UPDATE
// cap.age = 36;
// cap.isAvenger = false;
// cap.friends = ["Tony", "Bruice", "Peter"];

// // Delete
// delete cap.address;
// console.log(cap)

// for in loop in js
// for (let key in cap) {
//     console.log(key, ":", cap[key]);
// }

let propKey = "age"; 
console.log(cap[propKey]);
console.log(cap.xyz);