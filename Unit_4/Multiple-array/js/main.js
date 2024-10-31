function multiplyArray(numbers) {
    // Initialize the product variable to 1 (multiplicative identity)
    let product = 1;

    // Loop through each number in the array
    for (let i = 0; i < numbers.length; i++) {
        // Multiply the product by the current number
        product *= numbers[i];
    }

    // Return the final product
    return product;
}

// Example usage
const exampleArray = [1, 2, 3, 4]; // 1 * 2 * 3 * 4 = 24
const result = multiplyArray(exampleArray);
console.log(`The product of the array is: ${result}`); // Output: The product of the array is: 24