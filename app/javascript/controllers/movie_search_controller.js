import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="movie-search"
export default class extends Controller {
  static targets = ['form', 'list', 'input']
  connect() {
    console.log("Hi Tim!")
    console.log(this.formTarget)
    console.log(this.inputTarget)
    console.log(this.listTarget)

  }

  update() {
    console.log("Keyup!")
    // retrieve the input keyword
    const keyword = this.inputTarget.value
    // retrieve the correct URL, to "hit" the index action of our movie controller (same as our search form)
    const url = `${this.formTarget.action}?query=${keyword}`
    console.log(url)
    // fetch the backend (index action of our movie controller)
    fetch(url, {
      headers: { "Accept": "text/plain" }
    })
      .then(response => response.text())
      .then((data) => {
        // get filtered list of movies
        console.log(data)
        // insert them in the html
        this.listTarget.outerHTML = data
      })
  }
}
