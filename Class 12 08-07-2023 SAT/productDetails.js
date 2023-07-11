let url = document.location.href;
let id = url.split("?")[1];
id = id.split("=")[1];
console.log(id);
let product = JSON.parse(localStorage.getItem("products"))[id - 1];
console.log(product);

let renderProductDetails = () => {
    let productDetails = document.getElementById("productDetails");

    productDetails.innerHTML = `
                <div class="row">
                    <div class="col-4"> 
                        <img src="${product.thumbnail}" alt="" class="w-100">
                        
                    </div>
                    <div class="col-8">
                        <h2>${product.title}</h2>
                        <p>${product.description}</p>
                        <p>${product.price}</p>
                        <p>${product.rating}</p>
                        <div class="text-warning">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                    </div>
                </div>
    `
}
renderProductDetails();