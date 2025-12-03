
var dbpin=2345
var dbbalance=25000
var userpin=2345
var amount=2500

if(dbpin=userpin){  // password is same
    if(dbbalance>=amount){  //25000>2500
        console.log("withdrawal successful"); //withdrawal success
        
    }  
        
    else {
        console.log("insufficent balance");
        
    }
        
}
else{
    console.log("incorrect pin");
    
}