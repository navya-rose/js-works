//perfect number

var num = 6
var sum =0

for(let i=1;i<num;i++){  //i=1 ,2 ,3 ,4 ,5,6
    if(num%i==0){    //6%1==0 6%2=0 6%3=0 6%4!=0 6%5!=0
        sum=sum+i  //sum=0+1=1 1+2=3 3+3=6 
    }
}
console.log(num==sum?"perfect number":"not a perfect number");
