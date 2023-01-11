const myObject = require("./information");
const cowSay = require("./node_modules/cowsay");
const textToSay = myObject.name + " " + myObject.campus;
console.log(cowSay.say({
    text : textToSay,
    e : "oO",
    T : "U "
}));
