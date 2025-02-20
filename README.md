# JavaScript Loose Equality Bug

This repository demonstrates a common JavaScript error related to loose equality (==) when dealing with null or undefined values. The `foo` function is intended to add two numbers, but it unexpectedly returns null if either input is null.

## Bug Description
The issue stems from the use of loose equality (==) in the `if` condition.  This comparison doesn't strictly check for type, leading to unexpected null propagation.  Strict equality (===) should be used instead to prevent this.

## Solution
The bug is resolved by replacing loose equality with strict equality (===).  This ensures that the function only returns null if the input is explicitly null, preventing accidental propagation of null in the addition operation. 