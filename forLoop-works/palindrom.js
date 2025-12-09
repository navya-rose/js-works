 var text = "amanaplanacanalpanama"
 var result =""

 for(i=text.lenght-1;i>=0;i--){
    result=result+text[i]
 }
 console.log(result==text?"palindrome":"not a palindrome");
 