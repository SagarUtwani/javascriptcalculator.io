let value = "";
let calcvalue = "";
let signoperator = "";
let issignclicked = false;
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
    if (issignclicked == false && value != "") {
        calcvalue += "+";
        value = "+";
        signoperator = "+";
        document.getElementById("txtarea").value = value;
        console.log(calcvalue);
        issignclicked = true;
    }

}
function onclbtnsub() {
    if (issignclicked == false && value != "") {
        calcvalue += "-";
        value = "-";
        signoperator = "-";
        document.getElementById("txtarea").value = value;
        console.log(calcvalue);
        issignclicked = true;
    }
}
function onclbtnmult() {
    if (issignclicked == false && value != "") {
        calcvalue += "*";
        value = "*";
        signoperator = "*";
        document.getElementById("txtarea").value = value;
        console.log(calcvalue);
        issignclicked = true
    }
}
function onclbtndiv() {
    if (issignclicked == false && value != "") {
        calcvalue += "/";
        value = "/";
        signoperator = "/";
        document.getElementById("txtarea").value = value;
        console.log(calcvalue);
        issignclicked = true;
    }
}
function onclbtnequal() {
    if (issignclicked == true) {
        splitvalue();
        funccalculation();
        issignclicked = false;
    }
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
function funccalculation() {
    if (signoperator == "+") {
        document.getElementById("txtarea").value = parseInt(valueArr[0]) + parseInt(valueArr[1]);
    }
    else if (signoperator == "-") {
        document.getElementById("txtarea").value = valueArr[0] - valueArr[1];
    }
    else if (signoperator == "*") {
        document.getElementById("txtarea").value = valueArr[0] * valueArr[1];
    }
    else if (signoperator == "/") {
        document.getElementById("txtarea").value = valueArr[0] / valueArr[1];
    }
    value = "";
    calcvalue = "";
}
function AllClear(){
    value = "";
    calcvalue = "";
    signoperator = "";
    issignclicked = false;
    document.getElementById("txtarea").value = "";
}
function SingleClear(){
    value = value.slice(0,-1);
    calcvalue = calcvalue.slice(0,-1);
    document.getElementById("txtarea").value = value;
    

}
