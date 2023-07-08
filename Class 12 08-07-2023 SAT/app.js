// const getProducts = async () => {
//     const response = await fetch('https://dummyjson.com/products');
//     const myJson = await response.json();
//     console.log(myJson);
//     renderProducts(myJson);
//   };

//   let renderProducts = (data) => {
//     const productsRow = document.getElementById("productsRow");

//     data.products.forEach(product => {
//       const productElement = document.createElement("div");
//       productElement.classList.add("col-md-3");
//       productElement.classList.add("my-2");
//       productElement.innerHTML = `
//         <div class="product border">
//           <img src="${product.thumbnail}" alt="" class="w-100">
//           <h3 class="h5 ms-2">${product.title}</h3>
//           <div class="stars ms-2">
//             <i class="bi bi-star-fill"></i>
//             <i class="bi bi-star-fill"></i>
//             <i class="bi bi-star-fill"></i>
//             <i class="bi bi-star-fill"></i>
//             <i class="bi bi-star-fill"></i>
//           </div>
//           <p class="ms-2">(${product.rating})</p>
//           <p class="fw-bolder h5 ms-2">$ ${product.price}</p>
//           <button class="btn btn-success m-2" onclick="addToCart(${product.id})">add to cart <i class="bi bi-cart-plus"></i></button>
//         </div>
//       `;
//       productsRow.appendChild(productElement);
//     });
//   };

//   getProducts();

//   let addToCart = (event) => {
//     event.preventDefault();
//   };






// json xml
// API
// fetch()

// {

// }
// let functionName = async () => {

// }

let getProducts = async () => {
    let products = await fetch("https://dummyjson.com/products");
    let response = await products.json();
    // console.log(response.products);
    productsRendering(response.products);
}

let productsRendering = (data) => {
    // console.log(data);
    let productsRow = document.getElementById("productsRow");

    data.forEach(p => {
        let product = document.createElement("div");
        product.classList.add("col-3");
        product.classList.add("my-2");
        product.innerHTML = `
        <div class="product border">
                  <img src="${p.thumbnail}" alt="" class="w-100">
                  <h5 class="ms-2">${p.title}</h5>
                  <div class="stars ms-2 text-success">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p class="ms-2">${p.rating}</p>
                  <p class="ms-2 fw-bolder h5">$ ${p.price}</p>
                  <button class="btn btn-success m-2" onclick="addToCart(${p.id})">add to cart <i class="bi bi-cart-plus"></i></button>

                </div>
        `
        // console.log(product);
        productsRow.appendChild(product);
    });
}
getProducts();
let cart = [];
let addToCart = (id) => { 
    event.preventDefault();
    cart.push(id);
    alert("product add " + id)
}
console.log(cart);