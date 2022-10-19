//JavaScript Errors and Error Handling
"use strict";
const variable = "Dave";
console.log(variable);

Object.create();

const name = "Dave";
name = "Joe";
const makeError = () => {
    let i = 1;
    while (i <= 5) {
        try {
            if (i % 2 == 0) {
                throw new Error("Odd number!");
            }
            console.log("Even number!");
            //throw new customError("This is a custom error!");
            //const name = "Dave";
            //name = "Joe";
        } catch(err) {
            console.log(err.name);
            console.log(err.message);
            console.error(err.stack);
            //logTheError(err.stack);
        } finally {
            console.log("....finally");
            i++;
        } 
    }
    /*try {
        throw new customError("This is a custom error!");
        //const name = "Dave";
        //name = "Joe";
    } catch(err) {
        console.log(err.name);
        console.log(err.message);
        console.error(err.stack);
        //logTheError(err.stack);
    } finally {
        console.log("....finally");
    }*/
};
makeError();

/*function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = '${this.name}: ${this.message}';
} */