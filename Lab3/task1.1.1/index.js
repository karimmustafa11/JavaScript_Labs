var index2
if (!window.index2 || window.index2.closed) {
    index2 = window.open(
        "index2.htm",
        "_blank",
        "width=400,height=300,top=100,left=100"
    )

    index2.direction = "right";
    index2.interval = setInterval(() => {
        if (index2 && !index2.closed) {
            index2.moveBy(index2.direction === "right" ? 100 : -100, 0)

            if (
                index2.direction === "right" &&
                index2.screenX >= window.screen.availWidth - index2.outerWidth
            ) {
                index2.direction = "left";
            } else if (
                index2.direction === "left" &&
                index2.screenX <= 0
            ) {
                index2.direction = "right"
            }
        } else {
            clearInterval(index2.interval)
            index2.interval = null;
        }
    }, 100);
} else {
    index2.focus();
}

document.getElementById("stop").onclick = function () {
    if (index2 && index2.interval) {
        clearInterval(index2.interval);
        index2.interval = null
        index2.focus()
    }
}
