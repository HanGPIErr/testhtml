function forclear() {
    document.getElementById("rendu").innerHTML = "0";
}
function removeZero() {
    var value = document.getElementById("rendu").innerHTML;
    if (value == "0") {
        value = " "
        document.getElementById("rendu").innerHTML = value;
    }
}
function perc() {
    var value = document.getElementById("rendu").innerHTML;
    value = value / 100;
    document.getElementById("rendu").innerHTML = value;
}
function fordisplay(value) {
    removeZero()
    document.getElementById("rendu").innerHTML += value;
}