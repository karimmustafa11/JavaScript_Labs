var message = "Messi is the best player in the history";
var index = 0;
var p = document.getElementsByTagName("p")[0];

var interval = setInterval(function () {
    p.textContent += message[index];
    index++;
    if (index === message.length) {
        clearInterval(interval);
    }
}, 100);
