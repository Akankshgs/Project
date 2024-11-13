function accpetData() {
     let username=document.getElementById("username").value
    validateusername(username)

let password=document.getElementById("password").value
    vaildpassword(password)

}

function validateusername(username){
    let regex=/^[a-zA-Z0-9]+$/
   if(username===''){
    alert("cannot be empty")
   }
   else if(username.length<=5 || username.length>=15){
    alert("user is not in length")
   }
   else if(regex.test(username)==false){
    alert("it must symbol")
   }else
   {
    alert("vaild username")
   }
}   

function vaildpassword(password){
    if(password===''){
        alert("password not be empty ")
    }else
    if(password.length<8 || password.length>15){
        alert("not in length")

    }
}


