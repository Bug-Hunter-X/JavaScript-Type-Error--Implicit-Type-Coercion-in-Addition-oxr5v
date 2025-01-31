# JavaScript Type Error: Implicit Type Coercion

This repository demonstrates a common JavaScript error: implicit type coercion during addition. The `foo` function attempts to add two values without explicit type checking.  This can lead to unexpected behavior and runtime errors if the inputs are not numbers.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides a corrected version that handles potential type errors gracefully.

## How to reproduce the bug:

1. Clone this repository.
2. Run `bug.js`. Observe the error when non-numeric values are passed to `foo`.

## Solution:

The solution involves adding explicit type checking before performing the addition operation.  The `bugSolution.js` file shows the corrected implementation.