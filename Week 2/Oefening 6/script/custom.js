function highlow (getal1, getal2) {
    let number1 = new Number(getal1);
    let number2 = new Number(getal2);
    if(number<number2) {
        return number2;
    } else {
        return number1;
    }
};

alert(highlow(prompt("Getal1"), prompt("Getal2")));