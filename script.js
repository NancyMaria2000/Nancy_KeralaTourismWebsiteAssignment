let name=document.getElementById("name");
let error=document.getElementById("error");
let errorTwo=document.getElementById("errorTwo");
let errorThree=document.getElementById("errorThree");
let number=document.getElementById("number");
let email=document.getElementById("email");
let pwd=document.getElementById("psw");
let errorFour=document.getElementById("errorFour");
let errorFive=document.getElementById("errorFive");
let pwdR=document.getElementById("pswRepeat");
let uname=document.getElementById("uname");
let pswl=document.getElementById("pswlogin");
let errorSix=document.getElementById("errorSix");
let errorSeven=document.getElementById("errorSeven");

function validateName() {
   
    if(name.value.trim==""){
        error.innerHTML="Invalid";
        error.style.color="red";
        name.style.border="2px solid red";
        return false;
    }
    else{
        error.innerHTML="Valid";
        error.style.color="green";
        name.style.border="2px solid green";
        return true;
    }
}
function validateEmail(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(email.value)){
        errorTwo.innerHTML="Valid";
        errorTwo.style.color="green";
        email.style.border="2px solid green";
        return true;
    }
    else{
        errorTwo.innerHTML="Invalid";
        errorTwo.style.color="red";
        email.style.border="2px solid red";
        return false;
    }
}
function validateNumber(){
    let pnum=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(pnum.test(number.value)){
        errorThree.innerHTML="Valid";
        errorThree.style.color="green";
        number.style.border="2px solid green";
        return true;
    }
    else{
        errorThree.innerHTML="Invalid";
        errorThree.style.color="red";
        number.style.border="2px solid red";
        return false;
    }
}

function validatePwd(){
    let pswd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(pswd.test(pwd.value)){
        errorFour.innerHTML="Valid";
        errorFour.style.color="green";
        pwd.style.border="2px solid green";
        return true;
    }
    else{
        errorFour.innerHTML="Invalid";
        errorFour.style.color="red";
        pwd.style.border="2px solid red";
        return false;
    }
}
function validatePwdR(){
    let pswd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(pswd.test(pwd.value)!=pswd.test(pwdR.value)){
        errorFive.innerHTML="Password do not match";
        errorFive.style.color="red";
        pwdR.style.border="2px solid red";
        return false;
        
    }
    else{
        errorFive.innerHTML="Valid";
        errorFive.style.color="green";
        pwdR.style.border="2px solid green";
        return true; 
    }
}
function validateloginU(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(uname.value)){
        errorSix.innerHTML="Valid";
        errorSix.style.color="green";
        uname.style.border="2px solid green";
        return true;
    }
    else{
        errorSix.innerHTML="Invalid";
        errorSix.style.color="red";
        uname.style.border="2px solid red";
        return false;
    }
}
function validateloginP(){
    let pswd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(pswd.test(pswl.value)){
        errorSeven.innerHTML="Valid";
        errorSeven.style.color="green";
        pswl.style.border="2px solid green";
        return true;
    }
    else{
        errorSeven.innerHTML="Invalid";
        errorSeven.style.color="red";
        pswl.style.border="2px solid red";
        return false;
    }
}


const indicator = document.querySelector(".indicator");
const input = document.getElementById("psw");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".textindicator");
const showBtn = document.querySelector(".showBtn");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
function trigger(){
  if(input.value != ""){
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
    if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
    if(input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
    if(no==1){
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Your password is too week";
      text.classList.add("weak");
    }
    if(no==2){
      medium.classList.add("active");
      text.textContent = "Your password is medium";
      text.classList.add("medium");
    }else{
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if(no==3){
      weak.classList.add("active");
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Your password is strong";
      text.classList.add("strong");
    }else{
      strong.classList.remove("active");
      text.classList.remove("strong");
    }
    showBtn.style.display = "block";
    showBtn.onclick = function(){
      if(input.type == "password"){
        input.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#23ad5c";
      }else{
        input.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#000";
      }
    }
  }else{
    indicator.style.display = "none";
    text.style.display = "none";
    showBtn.style.display = "none";
  }
}