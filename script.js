const pets = [
  { name: "Max", species: "Golden Retriever", price: 1200 },
  { name: "Whiskers", species: "British Shorthair", price: 800 },
  { name: "Coco", species: "Netherland Dwarf Rabbit", price: 150 },
  { name: "Sunny", species: "Budgerigar", price: 60 },
];

function render() {
  const app = document.getElementById("app");
  app.innerHTML = pets
    .map(
      (pet) => `
    <div class="card">
      <h2>${pet.name}</h2>
      <p>${pet.species}</p>
      <p class="price">$${pet.price}</p>
      <button onclick="addToCart('${pet.name}')">Add to Cart</button>
    </div>`
    )
    .join("");
}

function addToCart(name) {
  alert(name + " added to cart!");
}

render();
