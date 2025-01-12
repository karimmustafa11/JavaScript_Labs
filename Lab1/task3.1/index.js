var p1 = prompt("Enter a string");
var p2 = confirm("Do you want to ignore case?");

var j = p1.length - 1
var palindrome = true
for (var i = 0; i < j;) {
    var char1 = p2 ? p1[i].toLowerCase() : p1[i];
    var char2 = p2 ? p1[j].toLowerCase() : p1[j];

    if (char1 == char2) {
        i++
        j--
    } else {
        palindrome = false
        alert("This string is not a palindrome");
        break
    }
}

if (palindrome) {
    alert("This string is a palindrome");
}

