function randomAverage(n) {
    // Initialize a variable to hold the sum of random numbers
    let sum = 0;

    // Generate n random numbers between 0 and 1 and calculate the sum
    for (let i = 0; i < n; i++) {
        sum += Math.random(); // Math.random() generates a random number between 0 and 1
    }

    // Calculate the average
    let average = sum / n;

    // Return the average
    return average;
}

// Main program to display results for various values of n
const testValues = [1, 10, 100, 1000, 10000, 100000, 1000000];

testValues.forEach(n => {
    const result = randomAverage(n);
    console.log(`The average of ${n} random numbers is: ${result}`);
});