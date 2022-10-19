//DOM: Document Object Model
const view1 = document.getElementById("view1"); //highlights all the div in the view1 
console.log(view1);
const view2 = document.querySelector("#view2"); //highlights all the div in the view2
console.log(view2);
view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view"); //returns html collection of the elements in the object
console.log(views);
const sameViews = document.querySelectorAll('.views'); //view class
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div"); //represents all the div in the tags
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)"); //it gives only even div
console.log(evenDivs);
for(let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue"; //colors all the evenDivs
    /*evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px"; */
}

const navText = document.querySelector("nav h1"); //highlights the h1 text of the navigation bar
console.log(navText); //My Page
navText.textContent = "Hello World!"; //changes the text in the navText
const navbar = document.querySelector("nav");
navbar.innerHTML = '<h1>Hello!</h1> <p>This should align right.</p>'; //changes the given navbar matter inside html
console.log(navbar);
navbar.style.justifyContent = "space-between";

console.log(evenDivs[0]); //0th index is 2
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes); //tells about all the nodes inside the html page
console.log(evenDivs[0].parentElement.hasChildNodes()); //tells whether there is a children nodes present or not
console.log(evenDivs[0].parentElement.lastChild); //tells what is the last node
console.log(evenDivs[0].parentElement.lastElementChild); 
console.log(evenDivs[0].parentElement.firstElementChild); //tells about the first child
console.log(evenDivs[0].nextSibling); //tells about what is the next sibling i.e. text or color
console.log(evenDivs[0].nextElementSibling.nextElementSibling); //tells about the next element if we use only nextElementSibling
console.log(evenDivs[0].previousSibling); //tells about the previous sibling
console.log(evenDivs[0].previousElementSibling); //tells about the previous element

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.margin = "10px";
view2.style.flexWrap = "wrap";

while (view2.lastChild) {
    view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv); 
}
//createDivs(view2, 10);
for(let i = 1; i <= 12; i++) {
    createDivs(view2, i);
}