function save() {
    var user = document.getElementById('user');
    var pass = document.getElementById('pass');
    var userData = {
        user: user.value,
        pass: pass.value
    }
    localStorage.setItem("user", JSON.stringify(userData));
    location.assign('../html/login.html')
}

function login() {
    var user = document.getElementById('user');
    var pass = document.getElementById('pass');
    var userData = JSON.parse(localStorage.getItem('user'));

    if (user.value == userData.user && pass.value == userData.pass) {
        location.assign('../html/index.html')
    }
    else
        alert("error")
}

