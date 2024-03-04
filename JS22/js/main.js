//JavaScript Event Listeners

const view = document.querySelector("#view2");
//console.log(view);
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

//Syntax: addEventListener(event, function, useCapture)

/* const doSomething = () => {
    alert("doing something");
};

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked";
}); */

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

/*const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        //view.style.backgroundColor = "purple";
        //view.target.style.backgroundColor = "purple";
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, false);
    div.addEventListener("click", (event) => {
        //div.style.backgroundColor = "blue";
        //div.target.style.backgroundColor = "blue";
        div.classList.toggle("blue");
        div.classList.toggle("black");
    }, false);
    h2.addEventListener("click", (event) => {
        //h2.style.backgroundColor = "purple";
        event.target.textContent = "clicked";
        const myText = event.target.textContent;
        myText === "My 2nd view" ? (event.target.textContent = "Clicked") : (event.target.textContent = "My 2nd view");
    }, false);

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.toggle("height100");
    });
    nav.addEventListener("mouseout", (event) => {
        event.target.classList.toggle("height100");
    });
}; */

//html form
const initApp = () => {
    const view = document.querySelector("#view3");
    const myForm = view3.querySelector("myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit event");
    });
};