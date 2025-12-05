
var number=153;

var sum=0;

while(number!= 0){          //153!=0 15!=0 1!=0 0==0

    let digit = number%10   //153%10=3 15%10=5 1%10=1

    cube=digit**3          //cube=3**3=27 5**3=125 1**3=1

    sum=sum+cube          // sum=0+27=27 27+125=152 152+1=153
    
    number=Math.floor(number/10) //153/10=15 15/10=3 3/10=0
}
console.log(sum);
