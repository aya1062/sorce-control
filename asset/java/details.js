document.addEventListener('DOMContentLoaded', function () {
    var product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (product) {
        displayProductDetails(product);
    } else {
        alert("لا يوجد منتج لعرض تفاصيله.");
    }
});

function displayProductDetails(product) {
    var detailsContainer = document.getElementById('product-details');
    
    var img = document.createElement('img');
    img.src = product.images[0];

    var h1 = document.createElement('h1');
    h1.textContent = product.title;

    var h3 = document.createElement('h3');
    h3.textContent = product.price + "$";

    var p = document.createElement('p');
    p.textContent = product.description;

    detailsContainer.appendChild(img);
    detailsContainer.appendChild(h1);
    detailsContainer.appendChild(h3);
    detailsContainer.appendChild(p);
}