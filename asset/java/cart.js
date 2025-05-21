
var p = document.getElementById('div');
var cart;
function getCart() {
    cart = JSON.parse(localStorage.getItem('cart'));

    for (var i = 0; i < cart.length; i++) {
        drawProduct2(cart[i], i);
    }

}

function drawProduct2(x, index) {
    var div = document.createElement('div');
    var img = document.createElement('img');
    var h4 = document.createElement('h4');
    var h5 = document.createElement('h5');
    var remove = document.createElement('button');
    img.src = x.images;
    h4.textContent = x.title;
    h5.textContent = x.price + "$";
    div.classList.add('card');
    h5.classList.add('price')
    img.classList.add('image')
    remove.textContent = 'remove';
    remove.onclick = function () {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();


    }

    img .onclick = function () {
        // localStorage.setItem("selectedProduct", JSON.stringify(x));
        window.location.href = "../html/prodDetails.html";
    };
    div.append(img, h4, h5, remove);

    p.appendChild(div);


}