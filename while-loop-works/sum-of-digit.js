 var number =345
 var sum = 0

 while(number!=0){ // 345!=0 t 34!=0 3!=0 0==0

    let digit = number%10 // 345%10=5 34%10=4 3%10=3

     sum = sum+digit //0+5=5  5+4=9 9+3=12

     number=Math.floor(number/10) //345/10=54 34/10=3 3/10=0
    
     
    
 }
 console.log(`sum = ${sum}`); //sum=12
 
 
 

 