//display sum of even lim 10

var limit = 4
 var sum =0
 var i = 1

 while(i<=limit){ //1<=4 t 2<=4 t 3<=4 t 4<=4 t 5<=4 f

    if(i%2==0){ //1%2!=0 f 2%2==0 t 3%2!=0 f 4%2==0 t
        sum=sum+i // 0+2=2 2+4=6
    }
    i++ //i=2,3,4,5
 }
 console.log(sum);
 