function plurializer (animal, amount) {
    if(animal === "sheep") {
        return animal;
    } else if(amount > 1) {
        return animal + "s";
    } else {
        return animal;
    }
};

alert(plurializer(prompt("dier?"), prompt("aantal?")));