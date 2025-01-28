var imgLeft = document.getElementById("img_left")
var imgright = document.getElementById("img_right")
var imgdown = document.getElementById("img_down")

var goButton = document.getElementById("goButton")
var resetButton = document.getElementById("resetButton")

var computedLeft = 0
var computedRight = 0
var computedtop = parseInt(getComputedStyle(imgdown).top)

var direction1 = 'right'
var direction2 = 'left'
var direction3 = 'top'

var left = parseInt(getComputedStyle(imgright).left)
var right = parseInt(getComputedStyle(imgLeft).right)
var topp = parseInt(getComputedStyle(imgdown).top)

var interval1
var interval2
var isMoving = false

function start() {
    interval1 = setInterval(function () {
        if (direction1 == 'right' && direction2 == 'left') {
            computedLeft += 10
            computedRight += 10
            imgLeft.style.left = computedLeft + "px"
            imgright.style.right = computedRight + "px"
            if (parseInt(imgLeft.style.left) > left && parseInt(imgright.style.right) < right) {
                direction1 = 'left'
                direction2 = 'right'
            }
        } else {
            computedLeft -= 10
            computedRight -= 10
            imgLeft.style.left = computedLeft + "px"
            imgright.style.right = computedRight + "px"
            if (parseInt(imgLeft.style.left) <= 0 && parseInt(imgright.style.right) <= 0) {
                direction1 = 'right'
                direction2 = 'left'
            }
        }
    }, 50)

    interval2 = setInterval(function () {
        if (direction3 == 'top') {
            computedtop -= 10
            imgdown.style.top = computedtop + "px";
            if (parseInt(imgdown.style.top) <= 0) {
                direction3 = 'down'
            }
        } else if (direction3 == 'down') {
            computedtop += 10
            imgdown.style.top = computedtop + "px"
            if (parseInt(imgdown.style.top) >= topp) {
                direction3 = 'top'
            }
        }
    }, 50)
}

function stop() {
    clearInterval(interval1)
    clearInterval(interval2)
}

function reset() {
    computedLeft = 0
    computedRight = 0
    computedtop = topp

    imgLeft.style.left = computedLeft + "px"
    imgright.style.right = computedRight + "px"
    imgdown.style.top = computedtop + "px"

    direction1 = 'right'
    direction2 = 'left'
    direction3 = 'top'

    if (isMoving) {
        stop()
        goButton.textContent = "Go"
        isMoving = false
    }
}

goButton.addEventListener("click", function () {
    if (isMoving) {
        stop()
        goButton.textContent = "Go"
        isMoving = false
    } else {
        start()
        goButton.textContent = "Stop"
        isMoving = true
    }
})

resetButton.addEventListener("click", reset)