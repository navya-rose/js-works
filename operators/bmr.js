var weight=42;
var height=166;
var age=22;

var bmr=((10*weight)+(6.25*height)-(5*age)-161);
console.log(bmr);
var calories= bmr*1.375;
console.log(`daily calories=${calories}`);
