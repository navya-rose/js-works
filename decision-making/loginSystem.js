 
 
var dbpassword = "password123@"
var dbotp=4556
var userpassword ="password123@"
var userotp = 4548

if(dbpassword==userpassword){         // passwords are same
    if(dbotp==userotp)
        console.log("login success");  // different otp
    else{
        console.log("invalid otp");     // display invalid otp
        
    }
        
    
}
else{
    console.log("invalid password");
    
}