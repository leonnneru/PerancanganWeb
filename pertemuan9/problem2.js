function palindrome(word) {
    let left = 0;
    let right = word.length - 1;

    while (left < right) {
        if (word[left] !== word[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(palindrome("civic"));    // true
console.log(palindrome("katak"));    // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("kupu-kupu")); // false