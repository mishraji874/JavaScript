// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, and Async/Await

//Callbacks
//function which is to be executed after another function has finished execution

function firstFunction(parameters, callback) {
    //do stuff
    callback();
}

//AKA "callback hell"
firstFunction(para, function() {
    secondFunction(para, function() {
        thirdFunction(para, function() {

        });
    });
});

//Promises
//Promises are one way to deal with asynchronous code in JavaScript, without writing too many callbacks in your code.
//3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Yes! resolved the promise!");
    } else {
        reject("No! rejected the promise.");
    }
});
/*console.log(myPromise);

myPromise.then(value => {
    return value + 1;
})
.then(newValue => {
    console.log(newValue);
})
.catch(err => {
    console.error(err);
}) */

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() { //setTimeout is used to stop the particular function inthe rest of the page
        resolve("myNextPromise resolved!");
    }, 3000);
});

myNextPromise.then(value => { //then is used for previous value
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});

//new
//const users = fetch("https://jsonplaceholder.typicode.com/users"); //fetch is used to get data from the external website

//pending
console.log(users);

const users = fetch("https:/jsonplaceholder.typicode.com/users")
.then(response => {
    return response.json();
})
.then(data => {
    //console.log(data);
    data.forEach(user => { //forEach is used to access all the elements in the array
        console.log(user);
    })
});

console.log(users);

//Async / Await
//async makes a function return a Promise. await makes a function wait for a Promise.
/*const myUsers = {
    userList: []
}*/

//new

//2nd parameter of fetch is a object
const jokeObject = {id: "0oO71TSv4Ed", joke: "Why was it called the  dark ages? Because of all the knights."}

const postData = async(jokeObj) => {
    const response = await fetch("https://httpbin.org/post"); ({
        method: "POST",
        headers: {
            "Content Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();

    console.log(jsonResponse.headers);
}


postData(jokeObject);


//new
const getAllUserEmails = async() => {
    //const response = await fetch("https://jsonplaceholder.typicode.com/users"); //await is used to say wait for sometime to fetch the data from the link
    const response = await fetch("https://icanhazdadjoke.com"); ({
        method: "GET",
        headers: {
            Accept: "application/json"
            //Accept: "text/plain"
        }
    });
    //const jsonUserData = await response.json();
    const jsonJokeData = await response.json();
    //const textJokeData = await response.text();

    console.log(textJokeData);
    console.log(jsonJokeData);

    /* const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });
    console.log(userEmailArray);
    postToWebPage(userEmailArray); */
}

getDadJoke();


const postToWebPage = (data) => {
    console.log(userEmailArray);
}

getAllUserEmails();
//console.log(getAllUserEmails());


//new
const myCoolFunction = async() => { //async lets you execute a block of code without stopping (or blocking) the entire thread where the action is being executed
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); //await is used to say wait for sometime to fetch the data from the link
    const jsonUserData = await response.json();
    console.log(jsonUserData);
    return jsonUserData;
}

//myCoolFunction();

const anotherFunc = async() => {
    const data = await myCoolFunction();
    //console.log(data);
    myUsers.userList = data;
    console.log(myUsers.userList);
};

anotherFunc();
console.log(myUsers.userList);