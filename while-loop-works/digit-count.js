 var number = 345

var count=0

while(number!=0){  //345!=0 34!=0 3!=0 0==0
    let digit = number%10 //345%10=5 
    count++ //count=1,2,3
    number=math.floor(number/10); //345/10=34 34/10=3 3/10=0
}

console.log(count); //3
