//Web Storage API

//Not part of the DOP - refers to the Window API
//Available to the JS via the global variable: window

//We do not have to type window: It is implied

/*window.alert("ok!"); //alerts window with the pop-up of ok
alert("ok!"); */

//window.alert("window.location"); //alert window with the pop-up of ip address
//alert("location");

const myArray = ["eat", "sleep", "code"];
const myObject = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
};
//sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
//const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));

//sessionStorage.setItem("mySessionStore", myArray);
//const mySessionData = sessionStorage.getItem("mySessionStore");

//sessionStorage.setItem("mySessionStore",JSON.stringify(myObject)); //converts JSON values to an object
//const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore")); //parse is used to convert to JSON string into an object

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
//localStorage.removeItem("myLocalStorage",getItem("myLocalStore"));
//const key = localStorage.key(0);
const storeLength = localStorage.length
const myLocalData = JSON.parse(localStorage.getItem("myLocalStorage")); //if the item is present in the localStorage then it will give otherwise gives null

localStorage.clear(); //clears all the data in the local storage
//console.log(typeof mySessionData);
//console.log(mySessionData);
console.log(storeLength); 