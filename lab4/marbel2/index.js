onload = function () {
    var Images = document.getElementsByClassName("img");
    var centerImage = document.getElementsByClassName("center")[0];
    var j = 1
    var interval

    for (var i = 0; i < Images.length; i++) {
        Images[j].onmouseover = hover
        Images[j].onmouseout = unhover
    }
    centerImage.onmouseover = hover
    centerImage.onmouseout = unhover


    console.log(Images);
    console.log(centerImage);

    function unhover() {
        interval = setInterval(function () {
            centerImage.src = `marbel${j}.jpg`

            if (j === 1) {
                for (var i = 0; i < Images.length; i++) {
                    Images[i].src = "marbel2.jpg"
                }
                j++
            } else if (j === 2) {
                for (var i = 0; i < Images.length; i++) {
                    Images[i].src = "marbel3.jpg"
                }
                j++;
            } else if (j === 3) {
                for (var i = 0; i < Images.length; i++) {
                    Images[i].src = "marbel1.jpg"
                }
                j = 1
            }
        }, 1000)
    }

    unhover()

    function hover() {
        clearInterval(interval)
    }
}
