
var keys = []
var values = []
var cookie = document.cookie.split("; ")

for (var i = 0; i < cookie.length; i++) {
    keys.push(cookie[i].split("=")[0])
    values.push(cookie[i].split("=")[1])
}

var visitCount = parseInt(getCookie("visitCount")) || 0;
visitCount += 1;
var date = new Date();
date.setMonth(date.getMonth() + 1);
setCookie("visitCount", visitCount, date);



function setCookie(key, value, expiryDate) {
    document.cookie = `${key}=${value};expires=${expiryDate.toUTCString()}`;
}


function getCookie(k) {
    for (var i = 0; i < keys.length; i++) {
        if (k === keys[i]) {
            return values[i]
        }
    }
}

var userName = getCookie("usrname");
var age = getCookie("age");
var gender = getCookie("gender");
var color = getCookie("color");

var image = (gender == "male") ? "1.jpg" : "2.jpg"
document.body.innerHTML = `
        <div style="display: flex; align-items: center;">
            <img src="${image}">
            <div>
                <p style="color: black; margin: 0;">
                    Welcome <span style="color: ${color};">${userName}</span> and your visit number is 
                    <span style="color: ${color};">${visitCount}</span>
                </p>
            </div>
        </div>`;