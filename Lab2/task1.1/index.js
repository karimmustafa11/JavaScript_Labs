

var sum = 0, sub = 0, mul = 1, div = 1
var counter = 0
var flag = false
do {
    var userInput = prompt(`Enter number ${counter + 1}`)
    if (!isFinite(userInput) || userInput == '') {
        alert("Please Enter a valid value")
        continue
    }
    else {

        if (userInput == '0') {
            alert("zero isn't allowed!")
            continue
        }
        else {

            if (parseInt(userInput)) {
                sum += parseInt(userInput)
                mul *= parseInt(userInput)
                if (counter == 0) {
                    sub = parseInt(userInput);
                    div = parseInt(userInput);
                } else {
                    sub -= parseInt(userInput);
                    div /= parseInt(userInput);
                }
                flag = true
                counter++
            }
        }
    }
} while (counter < 3)

if (flag) {
    document.write("<h1> Add - Subtraction - Multiplication - Division</h1>")
    document.write(`<hr>`)
    document.write(`<h3> Sum of ${counter} values is ${sum} `)
    document.write(`<h3> Subtraction of ${counter} values is ${sub} `)
    document.write(`<h3> Multiplication of ${counter} values is ${mul} `)
    document.write(`<h3> Division of ${counter} values is ${div.toFixed(2)} `)
}



