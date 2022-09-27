# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @eileenli/lotide`

**Require it:**

`const _ = require('@eileenli/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head()`: This function can retrieve the first element from the array.
- `tail()`: This function can retrieve the last element from the array
- `middle()`: This retrieve middle element(s) of an array. For arrays with one or two elements, there is no middle. Return an empty array. For arrays with odd number of elements, an array containing a single middle element should be returned. For arrays with an even number of elements, an array containing the two elements in the middle should be returned
- `assertArraysEqual(array1, array2)`: This function can check if two arrays are equal and provide assertion for the result.
- `assertEqual(actual, expect)`: This function can check if two variables are equal and provide assertion for the result.
- `assertObjectsEqual(object1, object2)`: This function can check if two objects are equal and provide assertion for the result.
- `countLetter()`: This function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
- `countOnly(allItems, itemsToCount)`:This function should take in a collection of items and return counts for a specific subset of those items. Only specified type of item will be counted.
- `eqArrays(array1, array2)`: This function can check if two arrays are identical.
- `eqObjects(object1, object2)`: This function can check if two objects are identical.
- `findKey()`: This function scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
- `findKeyByValue(object, value)`: This function can scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
- `flatten()`: This take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array (no nested array).
- `letterPositions()`: This function can return all the indices (zero-based positions) in the string where each character is found.
- `map(array, callback)`: This function can return a new array based on the results of the callback function
- `takeUntil(array, callback)`: The function will return a slice of the array with elements taken from the beginning. It should keep going until the callback/predicate returns a truthy value.
- `without(array, remove)`: This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
