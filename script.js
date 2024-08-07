const FirstName=document.getElementById("FirstName");
const LastName=document.getElementById("LastName");
const Email=document.getElementById("Email");
const Password=document.getElementById("Password");
let errormsg=document.getElementsByClassName("error");
const icon=document.getElementsByClassName("icon");
let form=document.getElementById("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(FirstName.value.trim()===""){
        errormsg[0].textContent="You need to enter your FirstNmae";
        icon[0].style.opacity="1";
    }else{
        errormsg[0].textContent="";
        icon[0].style.opacity="0";
    }
    if(LastName.value.trim()===""){
        errormsg[1].textContent="You need to enter your LastName";
        icon[1].style.opacity="1";
    }else{
        errormsg[1].textContent="";
        icon[1].style.opacity="0";
    }
    if(Email.value.trim()===""){
        errormsg[2].textContent="You need to enter your Email Address";
        icon[2].style.opacity="1";
    }else{
        errormsg[2].textContent="";
        icon[2].style.opacity="0";
    }
    if(Password.value.trim()===""){
        errormsg[3].textContent="You need to enter your Password";
        icon[3].style.opacity="1";
    }else{
        errormsg[3].textContent="";
        icon[3].style.opacity="0";
    }
});

