const myObject = require("./information");
const cowSay = require("./node_modules/cowsay");

console.log(cowSay.say({
    text : myObject.name, 
    e : myObject.campus,
    T : "U "
}));