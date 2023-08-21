function validate(){
    var email = document.getElementById("email");//can only use for id and this is using input id 
    var password = document.getElementById("password");
    var email_error = document.getElementById('email_error');
    var pass_error = document.getElementById('pass_error');
    var admin = "admin@gmail.com";
    var adminpass = "admin66";
    var input = document.querySelector('.input-container');

    if(email.value.trim()==""){//trim will removed spacebar to counter the spacebar bug 
        //alert("blank email");
        email.style.border = "2px solid red";
        email_error.style.display="block";
        email_error.innerHTML="*Please enter your email";
        return false;
    }
    else if(email.value.trim().length<9){
        //alert("email too short")
        email.style.border = "2px solid red";
       email_error.style.display="block";
       email_error.innerHTML="*Email too short";
       return false;
    }
    else if(password.value.trim()==""){
       //alert("blank password")
       input.style.border = "2px solid red";
       pass_error.style.display="block";
       pass_error.innerHTML="*Please enter your password";
        return false;
    }
    else if(password.value.trim().length<6){
        //alert("Password too short")
        input.style.border = "2px solid red";
       pass_error.style.display="block";
       return false;
    }
    
    else{
        if(email.value == admin && password.value == adminpass ){
            true;
        }
        else{
            if(password.value == adminpass){
            email.style.border = "2px solid red";
            email_error.style.display="block";
            email_error.style.innerHTML="Please enter a correct password"
        }
            else if(email.value == admin){
            input.style.border = "2px solid red";
            pass_error.style.display="block";
            pass_error.style.innerHTML="Please enter a correct email"
            }

            else{
                input.style.border = "2px solid red";
            pass_error.style.display="block";
            email.style.border = "2px solid red";
            email_error.style.display="block";

            }
            
            return false;
        }
    }
}

function forgetpass(){
    alert("Please contact our email trendywear@gmail.com to change your password");
}

function visibility(){
    const visibilityToggle = document.querySelector('.visibility');
    var password = document.getElementById('password');

    if (password.type == 'password'){
        password.type="text";
        visibilityToggle.innerHTML = 'visibility';
    }
    else{
        password.type="password";
        visibilityToggle.innerHTML = 'visibility_off';
    }
    
}