//Objects
//key-value pairs in curly braces
const myObj = {name: "Dave"};
const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function() {
        return 'Time for ${this.beverage.morning}';
    }
};
console.log(myObj.name);
console.obj(anotherObj.hobbies[0]);
console.obj(anotherObj["alive"]);
console.obj(anotherObj.beverage.morning);
console.log(anotherObj.action());


const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrroooom!";
    }
}
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck.wheels); //Inheritance
console.log(truck.engine);
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {
    return "Whooooosh!";
}
console.log(car.engine());
console.log(car.wheels);
const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine);
tesla.engine = function() {
    return "Shhhhh....";
}
console.log(tesla.engine());


const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};
delete band.drums;
console.log(band.hasOwnProperty("drums")); //leaves drums one and returns all others
console.log(Object.keys(band)); //returns the keys(used to declare what the thing is) which are used in the object
console.log(Object.values(band)); //returns all the values of the objects
for (let job in band) {
    console.log('On ${job}, its ${band[job]}');
}

//destructing objects
const {guitar: myVaribale, bass: mybass} = band;
console.log(myVaribale);
console.log(guitar);
console.log(vocals);

function sings({vocals}) {return '${vocals} sings!'};

console.log(sings(band));