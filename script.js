let value = "";
let calcvalue = "";
let signoperator = "";
var valueArr;

function settextareavalue(val) {
    if (value == "+" || value == "-" || value == "x" || value == "/" || value == "*") {
        value = "";
    }
    calcvalue += val;
    value += val;
    document.getElementById("txtarea").value = value;
}
function onclbtn1() {
    settextareavalue("1")
}
function onclbtn2() {
    settextareavalue("2")
}
function onclbtn3() {
    settextareavalue("3")
}
function onclbtn4() {
    settextareavalue("4")
}
function onclbtn5() {
    settextareavalue("5")
}
function onclbtn6() {
    settextareavalue("6")
}
function onclbtn7() {
    settextareavalue("7")
}
function onclbtn8() {
    settextareavalue("8")
}
function onclbtn9() {
    settextareavalue("9")
}
function onclbtn0() {
    settextareavalue("0")
}
function onclbtnadd() {
    calcvalue += "+";
    value = "+";
    signoperator = "+";
    document.getElementById("txtarea").value = value;
    console.log(calcvalue);
}
function onclbtnsub() {
    calcvalue += "-";
    value = "-";
    signoperator = "-";
    document.getElementById("txtarea").value = value;
    console.log(calcvalue);
}
function onclbtnmult() {
    calcvalue += "*";
    value = "*";
    signoperator = "*";
    document.getElementById("txtarea").value = value;
    console.log(calcvalue);
}
function onclbtndiv() {
    calcvalue += "/";
    value = "/";
    signoperator = "/";
    document.getElementById("txtarea").value = value;
    console.log(calcvalue);
}
function onclbtnequal() {
    signoperator = "";
    console.log(calcvalue);
    console.log(parseInt(calcvalue));
}

function splitvalue() {
    if (signoperator == "+") {
        valueArr = calcvalue.split("+");
    }
    else if (signoperator == "-") {
        valueArr = calcvalue.split("-");
    }
    else if (signoperator == "*") {
        valueArr = calcvalue.split("*");
    }
    else if (signoperator == "/") {
        valueArr = calcvalue.split("/");
    }
}

