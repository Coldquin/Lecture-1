function getProducts(array) {
    return array.map((_, i, a) => a.reduce((a, b, j) => a * (i === j || b), 1));
}

console.log(getProducts([1, 7, 0, 4]));
console.log(getProducts([1, 7, 3, 4]));