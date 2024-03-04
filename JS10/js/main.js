//user input
alert("Hello World!");
confirm("Ok === True\nCancel === False");

let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);

let name = prompt("Please enter your name."); //takes input from the user
//console.log(typeof name);
if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
    console.log(name ?? "You didn't enter your name.");
}
else {
    console.log("You didn't enter your name.");
}