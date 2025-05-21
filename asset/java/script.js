function getDataFromDB() {
    var prodcuts = {
        "products": [
            {
                "id": 1,
                "title": "أربعون",
                "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
                "category": "self dev",
                "price": 9.99,
                "stock": 5,
                "images": [
                    "../IMAGE/F3pjlZnXsAMwgQU.jpg"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
            },
            {
                "id": 2,
                "title": "ماذا خسر العالم بانحطاط المسلمون",
                "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
                "category": "region",
                "price": 19.99,
                "stock": 44,
                "images": [
                    "../IMAGE/كتاب-ماذا-خسر-العالم-بانحطاط-المسلمين؟.jpg"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
            },
            {
                "id": 3,
                "title": "لانك الله",
                "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
                "category": "region",
                "price": 14.99,
                "stock": 59,
                "images": [
                    "../IMAGE/b5ce4e8ec040ec9ac9ef2abe1c19aa4c.jpg"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
            },
            {
                "id": 4,
                "title": "فن اللامبالاة",
                "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
                "category": "self dev",
                "price": 12.99,
                "stock": 68,
                "images": [
                    "../IMAGE/FBIMG1716555277829.jpg"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
            
            },
            {
                "id": 5,
                "title": "الداء والدواء",
                "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
                "category": "region",
                "price": 12.99,
                "stock": 68,
                "images": [
                    "../IMAGE/1091535428.jpg"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
            
            },
            {
                "id": 6,
                "title": "ولا في الاحلام",
                "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
                "category": "art",
                "price": 12.99,
                "stock": 68,
                "images": [
                    "../IMAGE/57141.2019-09-07.1567856339.png"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
            
            },
            {
                "id": 7,
                "title": "ايماجو",
                "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
                "category": "romance",
                "price": 12.99,
                "stock": 68,
                "images": [
                    "../IMAGE/images.jpg"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
            
            },
            {
                "id": 8,
                "title": "كوني كالزهرة",
                "description": "كتاب كوني كالزهرة هي أحد أشهر أعمال الكاتبة الشابة دعاء عبد الرحمن. وقد تميزت أعمال وروايات دعاء عبد الرحمن بانتشارها في أوساط الشباب والبالغين، وتميزت أيضًا بالسهولة والبساطة والحبكة الروائية الجميلة. وفي هذا المقال نقدم مراجعة مختصرة وسريعة لـ كتاب كوني كالزهرة",
                "category": "region",
                "price": 12.99,
                "stock": 68,
                "images": [
                    "../IMAGE/20165.2019-09-07.1567857158.png"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
            
            },
            {
                "id": 9,
                "title": "الرجال من المريخ والنساء من الزهرة",
                "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
                "category": "art",
                "price": 12.99,
                "stock": 68,
                "images": [
                    "../IMAGE/الرجال من المريخ والنساء من الزهرة.jpg"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
            
            },
            {
                "id": 10,
                "title": "اكتشفت زوجي في الاوتوبيس",
                "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
                "category": "romance",
                "price": 12.99,
                "stock": 68,
                "images": [
                    "../IMAGE/اكتشفت-زوجي-في-الأتوبيس-دعاء-عبد-الرحمن-pdf-200x300.jpg"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
            
            },
            {
                "id": 11,
                "title": "العادات السبع للناس الاكثر فاعلية",
                "description": "نشر لأول مرة في عام 1989، وهو كتاب عن الاعتماد على الذات لستيفن كوفي. وقد بيعت أكثر من 15 مليون نسخة ترجمت ل38 لغة منذ أول ما نشر، وتم الاحتفال بالطبعة الخامسة عشر في الذكرى السنوية عام 2004. الكتاب يتعرض لسبع مبادئ، إذا طبقت كعادات فإنها من المفترض أن تساعد الشخص على أن يكون أكثر فعالية.كوفي يؤكد أنه يمكن تحقيق ذلك عن طريق مواءمة النفس إلى ما يسميه «بالبوصلة الداخلية باتجاه الشمال» على أساس المبادئ الأساسية للأخلاقيات والطابع حيث أنه يعتقد أنها عالمية وغير محدودة زمنيا.",
                "category": "selfdev",
                "price": 12.99,
                "stock": 68,
                "images": [
                    "../IMAGE/s-l400.jpg"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
            
            },

        ],
        "total": 4,
        "skip": 0,
        "limit": 4
    }
    return prodcuts.products;
}
var prodcuts = getDataFromDB()
var parent = document.getElementById('parent');
for (var i = 0; i < prodcuts.length; i++) {
    drawProduct(prodcuts[i])
}


var cart = [];
function drawProduct(x) {
    var div = document.createElement('div');
    var img = document.createElement('img');
    var h4 = document.createElement('h4');
    var h5 = document.createElement('h5');
    var but = document.createElement('button');
    img.src = x.images;
    h4.textContent = x.title;
    h5.textContent = x.price + "$";
    but.textContent = "add to cart"
    but.onclick = function () {
        cart.push(x);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert('item added to cart');
    }

    img .onclick = function () {
        // localStorage.setItem("selectedProduct", JSON.stringify(x));
        window.location.href = "../html/prodDetails.html";
    };

    div.classList.add('card');
    h5.classList.add('price')
    img.classList.add('image')

    div.append(img, h4, h5, but);

    parent.appendChild(div);

}



function region() {

    parent.textContent = "";
    for (var i = 0; i < prodcuts.length; i++) {
        if (prodcuts[i].category == "region")
            drawProduct(prodcuts[i])
    }
}

function art() {
    parent.textContent = "";
    for (var i = 0; i < prodcuts.length; i++) {
        if (prodcuts[i].category == "art")
            drawProduct(prodcuts[i])
    }
}
function romance() {
    parent.textContent = "";
    for (var i = 0; i < prodcuts.length; i++) {
        if (prodcuts[i].category == "romance")
            drawProduct(prodcuts[i])
    }
}
function selfdev() {
    parent.textContent = "";
    for (var i = 0; i < prodcuts.length; i++) {
        if (prodcuts[i].category == "self dev")
            drawProduct(prodcuts[i])
    }
}
function Show() {
    parent.textContent = "";
    for (var i = 0; i < prodcuts.length; i++) {
        drawProduct(prodcuts[i])
    }
}


function save() {
    var user = document.getElementById('user');
    var email = document.getElementById('em');
    var pass = document.getElementById('pass');
    var userData = {
        user: user.value,
        email: email.value,
        pass: pass.value
    }
    localStorage.setItem("user", JSON.stringify(userData));
    location.assign('login.html')
}

function login() {
    var user = document.getElementById('user');
    var pass = document.getElementById('pass');
    var userData = JSON.parse(localStorage.getItem('user'));

    if (user.value == userData.user && pass.value == userData.pass) {
        location.assign('index.html')
    }
    else
        alert("error")
}


function search() {
    var text = document.getElementById('search').value.toLowerCase();
    var parent = document.getElementById('parent');
    parent.innerText = "";
    for (var i = 0; i < prodcuts.length; i++) {
        if (prodcuts[i].title.toLowerCase().includes(text)) {
            drawProduct(prodcuts[i]);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < prodcuts.length; i++) {
        drawProduct(prodcuts[i]);
    }
});