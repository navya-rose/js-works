var number=145;

var sum=0;

while(number!= 0){ //145!=0 14!=0 1!=0 0==0
    let digit = number%10  //145%10=5 14%10=4 1%10=1
    cube=digit**3  // 5**3=125  4**3=64 1***3=1
    sum=sum+cube  //0=125=125  125+64=189 169+1=190
    number=Math.floor(number/10)  //145/10=14  14/10=1  1/10=0
}
console.log(sum);
