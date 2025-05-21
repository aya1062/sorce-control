document.querySelectorAll(".card").forEach(item => {
    item.addEventListener("click", onProductClick);
})


var div;
var productImg;
var ratingElement;
var reviewCount;
var price;



function onProductClick(){
    
// This took a week to find out (this.id)
    // console.log(this.id);

    div = document.getElementById(this.id);
    productImg = div.getElementsByTagName('img')[0];
    ratingElement = div.getElementsByTagName('a')[2];
    reviewCount = div.getElementsByTagName('a')[3]
    price = div.getElementsByTagName('a')[4];

    console.log(div.getElementsByTagName('a')[4]);

    var productData = [div, productImg,ratingElement,reviewCount,price];

    window.localStorage.setItem("price", JSON.stringify(price));

}

function TranslateProduct(){
    console.log("Hello");
}