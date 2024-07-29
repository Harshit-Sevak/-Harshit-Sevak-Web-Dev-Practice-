//  Synchronous or blocking 
// line by line execution


//  Asyncchronous or non-blocking
//  -line by line execution not guaranteed 
// -callbacks will fire 

const fs = require("fs");
fs.readFile("harshu.txt", "utf-8", (a, b) => {
    console.log(a, b);
});
console.log("THis is a message ")