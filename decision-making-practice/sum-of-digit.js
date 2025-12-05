 var num =678
 var sum = 0

 while(num!=0){   //678!=0 67!=0 6!=0 0==0 
    let digit = num%10 //678%10=8 67%10=7 6%10=6

    sum = sum + digit  //0+8=8 8+7=15 15+6=21

    num=Math.floor(num/10) //678/10=67 67/10=6 6/10=0
 }
 console.log(sum);
 