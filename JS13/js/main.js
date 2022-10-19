//Functions

//Methods = Built-in functions

"Dave".toLowerCase();
Math.random();

//Function declaration syntax

function sum(num1, num2) {
    //console.log(num1);
    //console.log(num2);
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}
console.log(sum(2, 6));

function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("user@Github.com"))

const getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail("dave@domain.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("dAvE"));

//Function Reusable code