
window.onload = function () {
    var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
    var i = 0
    var slideInterval
    var flag = true

    var img = document.getElementsByTagName("img")[0]

    var buttons = document.getElementsByTagName("button")
    var buttonNext = buttons[0]
    var buttonSlide = buttons[1]
    var buttonStop = buttons[2]
    var buttonPrevious = buttons[3]


    buttonNext.onclick = function () {
        if (i < images.length - 1) {
            i++
            img.src = `./images/${images[i]}`
        }
    }


    buttonPrevious.onclick = function () {
        if (i > 0) {
            i--;
            img.src = `./images/${images[i]}`
        }
    }


    buttonSlide.onclick = function () {
        if (slideInterval) {
            clearInterval(slideInterval)
            slideInterval = null
        } else {

            if (flag) {
                slideInterval = setInterval(function () {
                    buttonNext.onclick()
                }, 1000)
            } else {
                slideInterval = setInterval(function () {
                    buttonPrevious.onclick()
                }, 1000)
            }

            flag = !flag
        }
    }


    buttonStop.onclick = function () {
        clearInterval(slideInterval)
        slideInterval = null
    }
}

