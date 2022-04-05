function Display(value) {
    document.getElementById("solution").value += value;
}

function result() {
    document.getElementById("solution").value = eval(document.getElementById("solution").value);
}

function reset() {
    document.getElementById("solution").value = '';
}