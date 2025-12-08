//gcd of two numbers

var num1 = 9
var num2 = 18

var gcd = 1

var minNumber = num1<num2?num1:num2  // smallest number

for(let i=1;i<=minNumber;i++){ //i=1,2,.....,minNumber=9

    if(num1%i==0 && num2%i==0){  
        gcd=i
    }
}

console.log(gcd);


