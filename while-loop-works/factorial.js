 var number=4;
 var fact = 1;
 var i=1;

 while(i<=number){ //1<=4 t 2<=4 t 3<=4 t 4<=4 t 5<=4 f
    fact=fact*i  // fact= 1*1=1 1*2=2 2*3=6 6*4=24
    i++ //i=2,3,4,5
 }
 console.log(`factorial of ${number} = ${fact}`);
 