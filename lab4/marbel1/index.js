
onload = function () {


    var images = document.getElementsByTagName("img")
    var interval;
    var i = 0;

    for (var j = 0; j < images.length; j++) {
        images[j].onmouseover = hover
        images[j].onmouseout = unhover
    }

    function hover() {
        clearInterval(interval)
    }

    function unhover() {

        interval = setInterval(function () {

            if (i > 0) {
                images[i - 1].src = "marbel1.jpg";
            } else {
                images[images.length - 1].src = "marbel1.jpg";
            }

            images[i].src = "marbel2.jpg"
            i++;

            if (i == images.length) {
                i = 0
            }
        }, 1000)
    }

    unhover()

}


