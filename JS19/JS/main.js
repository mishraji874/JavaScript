//JSON: JavaScript Object Notation
/*
JSON is used to send and receive data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send and receive data in many languages.
...not just in JavaScript.
*/

const myObj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello: function() {
        console.log("Hello!");
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj); //object

const sendJSON = JSON.stringify(myObj); //stringify is used to convert JS value to JSON value
console.log(sendJSON);
console.log(typeof sendJSON); //string
console.log(sendJSON.name);

const receiveJSON = JSON.parse(sendJSON); //converts JSON string to an object
console.log(receiveJSON);
console.log(typeof receiveJSON); //object