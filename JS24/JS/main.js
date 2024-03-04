//Modules
//import playGuitar from "./guitar.js";
//import {shredding as shred, plucking as fingerpicking } from "./guitar.js"; 
import * as Guitars from "./guitar.js";
import user from "./user.js";
const me = new user("email@gmail.com", "Dave");
console.log(me);
console.log(me.greeting());

console.log(playGuitar());
console.log(shredding());
console.log(plucking());