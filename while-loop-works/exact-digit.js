var number =345

while(number!=0){ //345!=0 t  34!=0 t 3!=0 t 0==0 f

    let digit =number%10 //345%10=5  34%10=4 3%10=3

    console.log(digit); //digit=5 4 3
    
    number=Math.floor(number/10) //number = 345/10=34 34/10=3 3/10=0
    
}