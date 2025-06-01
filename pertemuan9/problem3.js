function meanMedian(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let mean = Math.round(sum / numbers.length);

    let median;
    let mid = Math.floor(numbers.length / 2);
    if (numbers.length % 2 === 0) {
        let leftMid = numbers[mid - 1];
        let rightMid = numbers[mid];
        median = Math.round((leftMid + rightMid) / 2);
    } else {
        median = numbers[mid];
    }

    return [mean, median];
}

console.log(meanMedian([1, 2, 3, 4]));      // [2.5, 2.5]
console.log(meanMedian([1, 2, 3, 4, 5]));   // [3, 3]
console.log(meanMedian([7, 8, 9, 13, 15])); // [10.4, 9]
console.log(meanMedian([10, 20, 30, 40, 50])); // [30, 30]
console.log(meanMedian([15, 20, 30, 60, 120])); // [49, 30]