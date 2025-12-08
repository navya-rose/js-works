
var text = "helloworld"
 var Ccount = 0
 var Vcount = 0

 for(let ch of text){
    if (ch=="a" || ch=="e"|| ch=="i" || ch=="o" || ch=="u"){
        Vcount++

    }
    else if (ch!=" ")
        Ccount++
     
}
console.log(Ccount);
console.log(Vcount);


