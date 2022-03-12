function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;  
}

function increment(n) {
    return ++n;
}

function decrement(n) {
    return --n;
}

function makeInt(n) {
    let parsedNum = parseInt(n, 10);
    return parsedNum;
}

function preserveDecimal(n) {
    let parsedNum = parseFloat(n);
    return parsedNum;
}