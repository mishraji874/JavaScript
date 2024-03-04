//Javascript Classes
class Pizza {
    this.crust = "original";
    #sauce = "traditional"; //hash is used to declare private class
    #size;
    constructor(pizzaType, pizzaSize) {
        //this.type = pizzaType;
        this.#size = pizzaSize;
        //this.crust = "original";
        //this._size = pizzaSize;
        //this._crust = "original";
        //this.toppings = [];
    }
    getCrust() {
        return this.crust;
        //return this._crust; //underscore is used to tell that these are private
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
        //this._crust = pizzaCrust;
    }
    hereYouGo() {
        console.log('Here is your ${this.crust} sauce ${this.#size} pizza.');
    }
    /*getToppings() {
        return this.toppings;
    }
    setToppings() {
        this.toppings.push(this.toppings);
    }
    bake() {
        console.log('Baking a ${this.size} ${this.crust} crust pizza');
    }*/
}
/*const myPizza = new Pizza("pepperoni", "small");
myPizza.setCrust = "thin";
myPizza.bake();
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings()); */
const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.sauce);
console.log(myPizza.crust);
/*class SpecialityPizza extends Pizza { //extends is used to make class inside another class
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "The Works";
    }
    slice() { //to take out elements from the array
        console.log('Our ${this.type} ${this.size} pizza has 8 slices.')
    }
}
const mySpeciality = new SpecialityPizza("medium");
mySpeciality.slice(); */

//Factory Function
/*function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log('Baking a ${size} ${crust} crust pizza.')
    };
}
const myPizza = pizzaFactory("small");
myPizza.bake(); */