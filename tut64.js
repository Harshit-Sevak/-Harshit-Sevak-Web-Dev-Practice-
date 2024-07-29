const fs = require("fs");
 let text = fs.readFileSync("harshu.txt", "utf-8");
text = text.replace("bif" ,"big");

console.log("the bif of the file is")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("big.txt", text);
