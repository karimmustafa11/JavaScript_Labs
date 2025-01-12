flag = true
while (flag) {
    var promp = prompt("Enter a message")
    if (promp == null) {
        break
    }
    else {
        if (promp != '') {
            document.write("<h1> Heading </h1>")
            document.write('<hr>')
            for (i = 1; i <= 6; i++) {
                document.write(`<h${i}> ${promp} </h${i}>`)
                flag = false
            }
        }
        else {
            alert("please enter a valid value")
        }
    }

}