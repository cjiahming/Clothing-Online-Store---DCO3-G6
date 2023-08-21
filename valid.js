
function validate(){
var username = document.getElementById("name");
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
/*Validation pattern */ 
var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var namecheck = /^[A-Za-z]+$/;/*only aphlabet*/ 
var passcheck=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

var username_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var pass_error2 = document.getElementById('pass_error2');

var input = document.querySelector('.input-container');
var input2 = document.querySelector('.input-container2');

//name validation-----------------------------------------------------------------
if(username.value.trim()==""){
    username.style.border = "2px solid red";
    username_error.style.display="block";
    username_error.innerHTML="*Please fill in your name";
    username_error.style.color="red";
    return false;
}
else if(username.value.match(namecheck)){ //namecheck = only accept aplhabet
    username.style.border = "2px solid green";
    username_error.style.display="block";
    username_error.innerHTML="Valid Name";
    username_error.style.color="green";
    true;
}
else{
    username.style.border = "2px solid red";
    username_error.style.display="block";
    username_error.innerHTML="Please input alphabet characters only";
    username_error.style.color="red";//if user input again overwrite it 
    return false;
}
//email validation-------------------------------------------------------------------------------
if(email.value.trim()==""){
    email.style.border = "2px solid red";
    email_error.style.display="block";
    email_error.innerHTML="Please fill in your email";
    return false;
}
else if(email.value.match(pattern)){
    email.style.border = "2px solid green";
    email_error.style.display="block";
    email_error.innerHTML="Valid email";
    email_error.style.color="green";
    true;
}
else{
    email.style.border = "2px solid red";
    email_error.style.display="block";
    email_error.style.color="red";
    email_error.innerHTML="Please enter a valid email";
    return false;
}
//passworrd validation-------------------------------------------------
if(password.value.trim()==""){
    input.style.border = "2px solid red";
    pass_error.style.display="block";
    pass_error.innerHTML="Please fill in your password";
    pass_error.style.color="red";
    return false;
}
else if(password.value.match(passcheck)){
    input.style.border = "2px solid green";
    pass_error.style.display="block";
    pass_error.innerHTML="Valid password";
    pass_error.style.color="green";
    true;
}
else {
    input.style.border = "2px solid red";
    pass_error.style.display="block";
    pass_error.innerHTML="Your password must be 6 to 20 characters,contain one numeric digit,one upper case and one lower case";
    pass_error.style.color="red";
    return false;
}

//password confirmation------------------------------------
if(password.value != password2.value){
    pass_error2.style.display="block";
    input2.style.border="2px solid red";
    return false;
}
else {
    input2.style.border="green";
    true;
}
alert("Account created successfully");
}

/*const visibilityToggle = document.querySelector('.visibility');

const input = document.querySelector('.input-container input');

var password = true;

visibilityToggle.addEventListener('click', function() {
  if (password) {
    input.setAttribute('type', 'text');
    visibilityToggle.innerHTML = 'visibility';
  } else {
    input.setAttribute('type', 'password');
    visibilityToggle.innerHTML = 'visibility_off';
  }
  password = !password;
  
});*/

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

function visibility2(){
    const visibilityToggle = document.querySelector('.visibility2');
    var password2 = document.getElementById('password2');

    if (password2.type == 'password'){
        password2.type="text";
        visibilityToggle.innerHTML = 'visibility';
    }
    else{
        password2.type="password";
        visibilityToggle.innerHTML = 'visibility_off';
    }
    
}

