// *  *  *  *  *
// *  *  *  * 
// *  *  * 
// *  * 
// * 


//pattern -1


for(let r=1;r<=5;r++){
    let pattern = "";
    for(let c=1;c<=5;c++){
        if(c>r || c==1){     // if(c+r<=5)
            pattern+= "* \t"
        }

    }
    console.log(pattern);
          
}

//pattern-2

for(let r=5;r>=1;r--){
   let pattern="";
   for(let c=1;c<=r;c++){
    pattern+="* \t"
   }
   console.log(pattern);
   
    
}

