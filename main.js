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
    e.preventDefault(); //to stop flickering/flashing behavior of error message. Make it stay without disappearing.

    fName();
    lName();
    eMail();
    telePhone();
    pWord();
    confirmPword();
});

function fName(){
    let validFname = (/^[A-Za-z]+$/);
    if (firstName.value === '' || firstName.value.match(validFname) === null){  
        errorMessage[0].innerHTML = "Please enter a valid name";
        failureIcon[0].style.opacity = "1";
        successIcon[0].style.opacity = "";

    }else{
        errorMessage[0].innerHTML = "";
        failureIcon[0].style.opacity = "";
        successIcon[0].style.opacity = "1";
    }
}

function lName(){
    let validLname = (/^[A-Za-z]+$/);
    if (lastName.value === '' || lastName.value.match(validLname) === null){
        errorMessage[1].innerHTML = "Please enter a valid name";
        failureIcon[1].style.opacity = "1";
        successIcon[1].style.opacity = "";

    }else{
        errorMessage[1].innerHTML = "";
        failureIcon[1].style.opacity = "";
        successIcon[1].style.opacity = "1";
    }
}


function eMail(){
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.value === ''|| email.value.match(validEmail) === null){
        errorMessage[2].innerHTML = "Please enter a valid email in the format of user@domain.com";
        failureIcon[2].style.opacity = "1";
        successIcon[2].style.opacity = "";
    }else{
        errorMessage[2].innerHTML = "";
        failureIcon[2].style.opacity = "";
        successIcon[2].style.opacity = "1";
    }

}


function telePhone(){
    let validPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (phone.value === '' || phone.value.match(validPhone) === null){
        errorMessage[3].innerHTML = "Please enter a valid phone number of 10 digits";
        failureIcon[3].style.opacity = "1";
        successIcon[3].style.opacity = "";
    }else{
        errorMessage[3].innerHTML = "";
        failureIcon[3].style.opacity = "";
        successIcon[3].style.opacity = "1";
    }

}



function pWord(){
    var validPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}$/;

    if (password.value === ''|| password.value.match(validPassword) === null){
        errorMessage[4].innerHTML = "Please enter a password of 5 to 15 characters, that contains at least one number and one special character";
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

//--------------------------NOTES----------------------------------------------------------------------------------------------------------------
//the match() method returns an array of matches if the regular expression matches the string, or null (NOT false) if it doesn't match.

