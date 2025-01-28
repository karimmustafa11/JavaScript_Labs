onload = function () {

    var keys = []
    var values = []
    var cookie = document.cookie.split("; ")

    for (var i = 0; i < cookie.length; i++) {
        keys.push(cookie[i].split("=")[0])
        values.push(cookie[i].split("=")[1])
    }


    function setCookie(key, value, expiryDate) {
        if (expiryDate) {
            document.cookie = key + "=" + value + ";expires=" + expiryDate.toUTCString()
        }
        else {
            document.cookie = key + "=" + value
        }
    }



    var register = document.getElementById("register")
    register.onclick = function () {
        var Name = document.getElementById("username").value
        var Age = document.getElementById("age").value
        var Gender = document.querySelector('input[name="gender"]:checked')?.value
        var Color = document.getElementById("color").value
        var date = new Date()
        date.setMonth(date.getMonth() + 1)
        if (Name && Age && Gender && Color) {
            setCookie("usrname", Name, date)
            setCookie("age", Age, date)
            setCookie("gender", Gender, date)
            setCookie("color", Color, date)
            window.location.href = "index2.htm"

        }

    }
}








