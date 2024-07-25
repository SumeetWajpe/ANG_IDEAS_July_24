document.addEventListener("DOMContentLoaded", LoadProducts);

async function LoadProducts() {
  let res = await fetch("http://localhost:3000/products");
  let products = await res.json();

  let row = document.createElement("div");
  row.className = "row g-2";
  let main = document.getElementById("main");

  for (const product of products) {
    row.innerHTML += CreateProductCard(product);
  }
  main.append(row);
}

function CreateProductCard(product) {
  let card = `<div class="col-md-3"><div class="card">
 <a href="/products/details/${product.id}"> <img src=${product.imageUrl} class="card-img-top" alt=${product.title} width="200px" height="150px"></a>
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">₹. ${product.price}</p>
    <p class="card-text"> ${product.rating}</p>
    <button class="btn btn-primary"> ${product.likes} <i class="fa-solid fa-thumbs-up"></i></button>
  </div>
</div>
</div>
`;
  return card;
}
