import PizzaController from "./components/pizza-controller.js"



class App {
  constructor() {
    this.controllers = {
      pizzaController: new PizzaController
    }
  }
}





window.app = new App