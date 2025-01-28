var nameRE = /[a-zA-Z]+/;
var phoneRE = /^[0-9]{8}$/
var mobileRE = /^(01)(0|1|2|5)[0-9]{8}$/
var emailRE = /^[a-zA-Z]{3}+@[0-9]+.com/
var regex = [nameRE, phoneRE, mobileRE, emailRE]
var info = ["Name", "Phone", "Mobile", "Email"]
var prompArr = []

while (true) {
    for (var i = 0; i < 4; i++) {
        var promp = prompt(`Enter your ${info[i]}`)
        if (promp.match(regex[i])) {
            prompArr.push(promp)
        }
        else {
            alert(`You Must enter a valid ${info[i]}`)
        }
    }

}

document.write(`<P> Hello ${prompArr[0]}</p>`)
document.write(`<P>Your phone is ${prompArr[1]} </p>`)
document.write(`<P> Your mobile is ${prompArr[2]} </p>`)
document.write(`<P> your email is  ${prompArr[3]} </p>`)



