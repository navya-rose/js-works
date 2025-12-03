
var dbpin = 4567
var userpin = 4567
var dbbalance = 25000
var amount = 20000

if(dbpin=userpin){                                        // posswords are same
    if(amount%100==0){20000                               //multiple of 100
        if(amount<=dbbalance){                            //25000>20000
            console.log("withdrawal success");            // success 
            
        }
        else{
            console.log("insufficent balance");
            
        }
        
    }
    else{
        console.log("enter multiple of 100");
        
    }
}
else{
    console.log("incorrect pin");
    
}