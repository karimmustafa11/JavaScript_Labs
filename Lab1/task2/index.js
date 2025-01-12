
var sum = 0
do {
    var p = prompt("Enter a number")

    if (isFinite(p) && p != '') {
        p = parseInt(p)
        sum += p
    }
    else {
        alert("Enter a valid Number!")
    }

} while (sum <= 100 && p != '0' && p != NaN)


document.write(` sum is --> ${sum || 0}`)