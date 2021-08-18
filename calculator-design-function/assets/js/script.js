let calculator = document.getElementById("screen");

function gonder(x) {
    calculator.value = calculator.value + x;
}


function beraberdir() {
    calculator.value = eval(calculator.value)
}


function temizle() {
    calculator.value = ' ';
}

function sil() {
    calculator.value = calculator.value.substr(0, calculator.value.length - 1);
}
