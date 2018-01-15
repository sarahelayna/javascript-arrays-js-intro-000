var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element) {
var array2 = [element, array[0]];
return array2;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element);
return array;
}

function addElementToEndOfArray(array, element) {

}

function destructivelyAddElementToEndOfArray(array, element) {
array.push(element);
return array;
}
