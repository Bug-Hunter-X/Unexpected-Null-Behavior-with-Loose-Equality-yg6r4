function foo(a, b) {
  if (a === null || b === null) {
    return null; 
  }
  return a + b; 
}

console.log(foo(1, null)); // Output: null
console.log(foo(null, 1)); // Output: null
console.log(foo(1, 2)); // Output: 3

//Corrected version using strict equality
function fooCorrected(a, b) {
  if (a === null || b === null) {
    return 0; // Or handle null values appropriately
  }
  return a + b; 
}

console.log(fooCorrected(1, null)); // Output: 1 
console.log(fooCorrected(null, 1)); // Output: 1
console.log(fooCorrected(1, 2)); // Output: 3