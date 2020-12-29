const password = 'password';
console.log(password.length) ;//8

if(password.length>=8){
    let x = password.length;
   console.log("That password is long enough"+ x);
   document.getElementById("demo").innerHTML="That password is long enough" +"password is :" + x ;
}