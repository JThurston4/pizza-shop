import Pizza from "../models/pizza-model.js";
import Toppings from "../models/toppings-model.js";

let toppings = []
// let _pizza = new Pizza

export default class PizzaService {
  constructor() {
    console.log("services checking in")
  }

  pizzaBuilder(formData) {
    let topping = new Toppings(formData)
    toppings.push(topping)
    console.log(toppings)
  }
}