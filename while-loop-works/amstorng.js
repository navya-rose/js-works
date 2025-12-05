// amstrong number 8208

var number =8208;
var count=0;
var numberCopy=number
var orginal=number
var sum=0


while(number!=0){
    count++;
    number=Math.floor(number/10);

}
console.log(count);

while(numberCopy!=0){  //8028!=0 802!=0 80!=0 8!=0 0==0
    let digit=numberCopy%10  //8028%10=8  802%10=2 
    
    expo=digit**count  // expo=8^4= 4096 2^8=  
    sum=sum+expo //0+4096=4096
    numberCopy=Math.floor(numberCopy/10) //8028/10=802
}

    console.log(orginal==sum?"amstrong number":"non amstrong number");
    




