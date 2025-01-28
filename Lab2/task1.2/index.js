
var counter = 0
var flag = false
userArr = []
do {
    var userInput = prompt(`Enter number ${counter + 1}`)
    if (!isFinite(userInput) || userInput == '') {
        alert("Please Enter a valid Number")
        continue
    }
    else {

        if (parseInt(userInput)) {
            userArr[counter] = parseInt(userInput)
            flag = true
            counter++
        }

    }
} while (counter < 5)

//var asc = userArr.sort((a, b) => a - b)
//var desc = userArr.sort((a, b) => b - a)


if (flag) {
    document.write("<h1>Sorting</h1>")
    document.write(`<hr>`)
    document.write(`<h3> You Have Entered the values of ${userArr} </h3> `)
    document.write(`<h3> ur values after being sorted descending is ${userArr.sort((a, b) => b - a)} </h3>`)
    document.write(`<h3> ur values after being sorted descending is ${userArr.sort((a, b) => a - b)} </h3>`)

}



