let element = "";

function EnterNumber(num) {
    element += num;
    Display(element);
}


function EnterOperator(op) {

    if (element !== "") {
        element += op;
        Display(element);
    }
}

function EnterEqual() {
    if (element !== "") {
        if (element.includes("/0")) {
            element = "Can't divide by zero";
            Display(element);
            element = "";
        }
        else {
            var result = eval(element);
            Display(result)
            element = "";
        }

    }
}

function EnterClear() {
    element = "";
    Display("");
}


function Display(value) {
    document.getElementById("Answer").value = value;
}