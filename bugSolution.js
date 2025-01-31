function foo(a, b) {
  if (a === null || b === null) {
    return null; 
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or handle non-numeric input appropriately
  }
  return a + b; // Safe addition
}
console.log(foo(5, 10)); // Output: 15
console.log(foo(5, '10')); // Output: NaN
console.log(foo(null, 10)); // Output: null