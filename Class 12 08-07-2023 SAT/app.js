
let products;
let getProducts = async () => {
    let products = await fetch("https://dummyjson.com/products");
    let response = await products.json();
    // products = await response.products;
    // console.log(response.products);
    localStorage.setItem("products", JSON.stringify(response.products))
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
                  <h5 class="ms-2"><a href="./productDetails.html?pid=${p.id}">${p.title}</a></h5>
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
    // alert("product add " + id);
    let product = JSON.parse(localStorage.getItem("products"));
    cart.push(product[id]);
    console.log(product[id]);
    renderCartItems();
}

let renderCartItems = () => {
    document.getElementById("cartItems").innerHTML = "";
    let cartItems = document.getElementById("cartItems");
    cart.forEach(product => {
        cartItems.innerHTML += `
            <div class="d-flex justify-content-between">
                <img src="${product.thumbnail}" class="w-25" alt="">
                <h5 class=" mt-3">${product.title}</h5>
                <p class=" mt-3">${product.price}</p>
                <i class="bi bi-x mt-3"></i>
             </div>
        `
    });
    console.log(cart);
}

// console.log(cart);

