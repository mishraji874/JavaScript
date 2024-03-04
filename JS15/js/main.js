//Arrays
const myArray = [];

//add elements to an array 
myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;

//refer to an array 
console.log(myArray);

//length property
console.log(myArray.length);

//last element in an array
console.log(myArray(myArray.length-1));

console.log(myArray[1]);

myArray.push("school"); //enters the new element in the array
console.log(myArray);

myArray.pop(); //tells about the which is the last item in the array
console.log(myArray);

myArray.unshift(42); //put the given item in the first position of the array
console.log(myArray);

const firstItem = myArray.shift(); //tells about the which item is shifted in the array
console.log(firstItem);
console.log(myArray); //shifted element is not return. it only shows the rest of the element
console.log(myArray[1]); //since dave is shifted so 1001 is shifted to the 0th element and false is shifted to 1st element

myArray.splice(1,1,42); //used to delete and replace an element from the array
//the 1 is telling about from where the splice has to work, then second  1 is telling for deletion and 42 is telling to replace in the array and it will replace where the splice will start
//if don't want to delete just put 0

const myArray = ["A", "B", "C", "D", "E", "F"];
//const newArray = myArray.slice(2, 5); //returns the letters from where it is written. in our case 2 is there so it starts printing from c and the second one will tell where it has to stops
console.log(newArray);

myArray.reverse(); //reverse the array
console.log(myArray);

const newString = myArray.join(); //it joins all the elements of the array
//const newArray = newString.split(","); //each element is separated by comma
console.log(newString);

const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];
const newArray = myArrayB.concat(myArray); //add arrayB to arrayA
//const newArray = [myArrayA, myArrayB]; //tells about how many elements are there in the each array
console.log(newArray);


const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
//or
console.log(clothesShelfB[0]);

const equiDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equiDept[0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [equiDept, clothesDept];
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);