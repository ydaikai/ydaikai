"use strict";
let sales = 123456789;
let course = 'Typescript';
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [];
let user = [1, 'Mosh', true, 0];
user.push(1);
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(10000, 2022));
