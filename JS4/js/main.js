//Numbers

//An integer is a whole number.
const myNumber = 42;

//console.log(myNumber); //returns whole number

//A number with a decimal point is a float which references the "floating point"
const myFloat = 42.0151;

//console.log(myFloat); //returns float number

//const myString = "42";
const myString = "42.123abc";

//console.log(myString); //returns string value

//console.log(myNumber === myString); //returns error because the data types are different so its not equal

//console.log(myString + 3); //returns the number with addition of the number like it returns 423 in our case

//console.log(Number(myString) + 3); //now it returns addition result 45 in our case

//console.log(Number(myString) === myNumber); //returns true as both the numbers are equal

//console.log(Number("Dave")); //returns acronym number in our case it returns NaN

//console.log(Number(true)); //returns 1 for true and 0 for false

//Number methods
//The Number.isInteger() method determines whether the passed value is an integer

//The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

//console.log(Number.parseFloat(myFloat)); //returns float value
//console.log(Number.parseFloat(myString)); //returns only and only float values not characters
//console.log(Number.parseInt(myString)); //returns only and only integer values nothing else

//The toFixed() method formats a number according to how many decimal points you provide as the parameter.
//console.log(myFloat.toFixed(2));

//The toString() method returns a string representing the number
//console.log(myFloat.toString());

//Chaining = Using several methods chained together
//console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

//NaN is an acronym for Not a number

//console.log(Number("Dave"));

//The Number.isNaN() method determines whether the passed value is NaN and its type is Number
//console.log(Number.isNaN("Dave")) //its not a number so it returns false

//The global isNaN() function determines whether a value is NaN or not
console.log(isNaN("Dave")) //returns true for this case