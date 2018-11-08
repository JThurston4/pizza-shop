import PizzaService from "./pizza-service.js";


let _pizzaService = new PizzaService

export default class PizzaController {
  constructor() {
    console.log("Hello from the controller")
  }

  pizzaBuilder(event) {
    event.preventDefault()
    console.log(event)
    let form = event.target
    let formData = {
      name: form.name.value
    }
    _pizzaService.pizzaBuilder(formData)

    form.reset()
  }
}