//fibonacci series

var limit =10

var previous = 0
var current = 1
console.log(previous); //0
console.log(current);  //1

for(let i=0;i<=limit-2;i++){ //i=1,2,.....8  [limit-2 ==> already print 2 values ]
    next=previous+current    //next=0+1=1  
    console.log(next);     //1 

    previous=current
    current=next
    
}

