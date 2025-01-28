
var flag1 = false
do {
    var userInput1 = prompt(`Enter a radius of a circle to get area`)
    if (!isFinite(userInput1) || userInput1 == '') {
        alert("Please Enter a valid Number")
        continue
    }
    else {

        if (parseInt(userInput1) > 0) {
            var alert1 = (Math.PI * parseInt(userInput1) * parseInt(userInput1))
            flag1 = true
        }

        else {
            alert("please enter a positive value")
        }



    }
} while (!flag1)

confirm(`The area of the circle is ${alert1}`)


var flag2 = false
do {
    var userInput2 = prompt(`Enter a number to get the SQRT`)
    if (!isFinite(userInput2) || userInput2 == '') {
        alert("Please Enter a valid Number")
        continue
    }
    else {

        if (parseInt(userInput2) > 0) {
            var alert2 = (Math.sqrt(parseInt(userInput2)))
            flag2 = true
        }

        else {
            alert("Please enter a positive value")
        }

    }
} while (!flag2)

confirm(`The Squere root of ${userInput2} is ${alert2}`)






var flag3 = false
do {
    var userInput3 = prompt(`Enter an angel to get the cosin`)
    if (!isFinite(userInput3) || userInput3 == '') {
        alert("Please Enter a valid Number")
        continue
    }
    else {

        if (parseInt(userInput3) > 0) {
            var alert3 = (Math.cos(parseInt(userInput3) * (Math.PI / 180)))
            flag3 = true
        }

        else {
            alert("Please enter a positive value")
        }

    }
} while (!flag3)

confirm(`cosin of angle is ${alert3.toFixed(2)}`)








