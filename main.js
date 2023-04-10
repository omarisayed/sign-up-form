let firstName = document.getElementById('first_name');
let lastName = document.getElementById('last_name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm_password');
let submitBtn = document.getElementById('submit-btn');
let errorMessage = Array.from(document.getElementsByClassName('error'));
let successIcon = document.getElementsByClassName('success-icon');
let failureIcon = document.getElementsByClassName('failure-icon');

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault(); //stop flickering/flashing behavior of error message. Make it stay on its div without disappearing.

    fName();
    lName();
    eMail();
    telePhone();
    pWord();
    confirmPword();
});

function fName(){
    if (firstName.value === ''){
        errorMessage[0].innerHTML = "This field is required";
        failureIcon[0].style.opacity = "1";
        successIcon[0].style.opacity = "";

    }else{
        errorMessage[0].innerHTML = "";
        failureIcon[0].style.opacity = "";
        successIcon[0].style.opacity = "1";
    }
}

function lName(){
    if (lastName.value === ''){
        errorMessage[1].innerHTML = "This field is required";
        failureIcon[1].style.opacity = "1";
        successIcon[1].style.opacity = "";

    }else{
        errorMessage[1].innerHTML = "";
        failureIcon[1].style.opacity = "";
        successIcon[1].style.opacity = "1";
    }
}


function eMail(){
    if (email.value === ''){
        errorMessage[2].innerHTML = "Please enter a valid email in the format of user@domain.com.";
        failureIcon[2].style.opacity = "1";
        successIcon[2].style.opacity = "";

    }else{
        errorMessage[2].innerHTML = "";
        failureIcon[2].style.opacity = "";
        successIcon[2].style.opacity = "1";
    }
}


function telePhone(){
    if (phone.value === ''){
        errorMessage[3].innerHTML = "This field is required";
        failureIcon[3].style.opacity = "1";
        successIcon[3].style.opacity = "";

    }else{
        errorMessage[3].innerHTML = "";
        failureIcon[3].style.opacity = "";
        successIcon[3].style.opacity = "1";
    }
}


function pWord(){
    if (password.value === ''){
        errorMessage[4].innerHTML = "This field is required";
        failureIcon[4].style.opacity = "1";
        successIcon[4].style.opacity = "";

    }else{
        errorMessage[4].innerHTML = "";
        failureIcon[4].style.opacity = "";
        successIcon[4].style.opacity = "1";
    }
}


function confirmPword(){
    if (confirmPassword.value === ''){
        errorMessage[5].innerHTML = "This field is required";
        failureIcon[5].style.opacity = "1";
        successIcon[5].style.opacity = "";

    }else{
        errorMessage[5].innerHTML = "";
        failureIcon[5].style.opacity = "";
        successIcon[5].style.opacity = "1";
    }
}

