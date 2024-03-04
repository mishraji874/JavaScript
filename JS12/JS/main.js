//Loops
let myNumber = 0;
while (myNumber < 50) {
    myNumber++; //myNumber = myNumber + 1;
    console.log(myNumber);
}
//don't create an endless loop

do {
    myNumber += 2;
    console.log(myNumber);
} while (myNumber < 50); // do-while runs atleast one time

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//let name = "Dave";
for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
} //returns the letters

let counter = 0;
let myLetter;
let name = "Dave";
while (counter <= 3) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter +=2;
        continue;
    }
    if (myLetter === "v") {
        break;
        counter++;
    }
}
console.log(counter);