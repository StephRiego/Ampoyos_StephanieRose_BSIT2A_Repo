function calculateArea(r) {
    var area;
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r * r;
        return area;
    }
}

var radius = 5.2;
var theArea = calculateArea(radius);
console.log("The area is: " + theArea);

// function printName(firstName, lastName) {
//     var fullNamed = firstName + ' ' + lastName;
//     return fullNamed
// } 

// console.log('My full name is' + printName ('Stephanie Rose', 'Ampoyos'))