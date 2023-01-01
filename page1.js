username = document.querySelector('.username')
email = document.querySelector('.email')
password = document.querySelector('.password')
confirmation = document.querySelector('.confirmation')
flash = document.querySelector(".flash")
login = document.querySelector('.login')

login.addEventListener("click", function (){
    username = username.value
    email = email.value
    password = password.value
    confirmation = confirmation.value
    if(username === "" || email === "" || password === ""  || confirmation === "" ){
        alert("one of the fields is empty")
    }
    
    else if (username.length<3  || username.length >= 25){
        alert("username not valid either small either big")
    }
    else if(!(confirmation === password)){
        alert("invalid confirmation password")

    }
    else{
        location.href = "page2.html"
    }

})
