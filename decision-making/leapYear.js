// 2100 leap year or not

var year= 2100

   //2100%100==0 T and 2100%400!=0 F or 2100%100==0 T and 2100%4!=0 F
                // T&F || T&F   , f||f , false
                
if(year%100==0&&year%400==0 || year%100!=0&&year%4==0){ 
    console.log("leap year");
    
}
else{
    console.log("not leap year");
    
}