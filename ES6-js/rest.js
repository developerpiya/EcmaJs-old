function sum(...inputs) {
    console.log(inputs);
    let total = 0;
    for (let i of inputs) {
        total += i;
    }
    console.log(total);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);