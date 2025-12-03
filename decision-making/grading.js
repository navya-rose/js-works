// 3 marks
//calculate total
//grade A range 140-150
//grade B range 130-140
//grade C range 120-130

var mark1=40;
var mark2=42;
var mark3=48;

var total = mark1+mark2+mark3;
console.log(total);

 
if (total<150 && total>=140){
    console.log("grade A");
    
}
else if (total<140 && total>=130){
    console.log("grade B");
    
}
 else if (total<130 && total>=120){
    console.log("grade C");
    
 }