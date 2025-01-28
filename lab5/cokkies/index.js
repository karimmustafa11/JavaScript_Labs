
var date = new Date()
date.setMonth(date.getMonth() + 1)
setCookie("usrname", "ahmed", date)
setCookie('usrmail', "karim@gg")
setCookie('usrage', "20", date)


function setCookie(key, value, expiryDate) {
    if (expiryDate) {
        document.cookie = key + "=" + value + ";expires=" + expiryDate.toUTCString()
    }
    else {
        document.cookie = key + "=" + value
    }
}

var keys = []
var values = []
var cookie = document.cookie.split("; ")

for (var i = 0; i < cookie.length; i++) {
    keys.push(cookie[i].split("=")[0])
    values.push(cookie[i].split("=")[1])
}

function getAllcookies() {
    var allCookies = []
    for (var i = 0; i < keys.length; i++) {
        allCookies[[keys[i]]] = values[i]
    }
    console.log(allCookies)
}


function deleteCookie(k) {
    var deleted = false
    for (var i = 0; i < keys.length; i++) {
        if ((k == keys[i])) {
            var date = new Date()
            date.setMonth(date.getMonth() - 1)
            document.cookie = k + "=" + ";expires=" + date.toUTCString()
            deleted = true
        }

    }
    if (!deleted) {
        alert("You entered an invalid cookie name")
    }
}


function clearCookies() {
    for (var i = 0; i < keys.length; i++) {
        var date = new Date()
        date.setMonth(date.getMonth() - 1)
        document.cookie = keys[i] + "=" + ";expires=" + date.toUTCString()
        deleted = true

    }

}

function hasCookie(k) {
    for (var i = 0; i < keys.length; i++) {
        if (k === keys[i]) {
            return true
        }
    }
    return false
}


